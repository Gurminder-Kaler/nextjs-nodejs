const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const messages = require("@constants/messages");
const User = require("@models/userModel");
const loginValidator = require("@validations/authValidator/loginValidator");
const registerValidator = require("@validations/authValidator/registerValidator");
// const UserMac = require("@models/userMacModel");
// const Mac = require("@models/macModel");
// const signUpValidator = require("@validations/authRequest/signUpValidator");
// const myAccountValidator = require("@validations/myAccountRequest/myAccountValidator");

//signup
const registerServiceFunc = async (req, res) => {
  const { errors, isValid } = registerValidator(req.body);
  if (!isValid) {
    return res.json({
      status: 400,
      success: false,
      message: errors,
    });
  }
  User.findOne({ email: req.body.email }).then((outerResult) => {
    if (!outerResult) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.json({
            status: 500,
            success: false,
            message: "err",
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            role: req.body.role,
            password: hash,
          });
          user.save().then((userResult) => {
            if (userResult) {
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user._id,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "11h",
                }
              );
              res.json({
                status: 200,
                success: true,
                message: messages.SUCCESS.AUTH.LOGGEDIN,
                token: token,
                data: {
                  id: user._id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  role: user.role,
                },
              });
            }
          });
        }
      });
    } else {
      const token = jwt.sign(
        {
          email: outerResult.email,
          userId: outerResult._id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "11h",
        }
      );
      res.json({
        status: 200,
        success: true,
        message: messages.SUCCESS.AUTH.LOGGEDIN,
        token: token,
        data: {
          id: outerResult._id,
          firstName: outerResult.firstName,
          lastName: outerResult.lastName,
          email: outerResult.email,
          role: outerResult.role,
        },
      });
    }
  });
};

//login
const loginServiceFunc = async (req, res) => {
  console.log("login service func", req.body);
  const { errors, isValid } = loginValidator(req.body);
  if (!isValid) {
    return res.json({
      status: 400,
      success: false,
      message: errors,
    });
  }
  User.findOne({
    email: req.body.email,
  })
    .exec()
    .then((user) => {
      console.log("user", user);
      if (!user) {
        res.json({
          status: 401,
          success: false,
          message: { email: messages.FAILURE.NO_USER_FOUND },
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        console.log("result", result);
        if (err) {
          res.json({
            status: 401,
            success: false,
            message: { email: messages.FAILURE.NO_USER_FOUND },
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "11h",
            }
          );
          res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.AUTH.LOGGEDIN,
            token: token,
            data: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
            },
          });
        } else {
          res.json({
            status: 401,
            success: false,
            message: { email: messages.FAILURE.AUTH_FAILED },
          });
        }
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

//get user by Id
const getUserViaEmailServiceFunc = async (req, res) => {
  //   console.log("NODEJS", req.body);
  //   const { errors, isValid } = myAccountValidator(req.body);
  //   if (!isValid) {
  //     res.json({
  //       status: 400,
  //       success: false,
  //       message: errors,
  //     });
  //   }
  const filter = {
    email: req.body.email,
  };
  User.findOne(filter)
    .select("-deletedAt")
    .exec()
    .then((user) => {
      res.json({
        success: true,
        // message: messages.SUCCESS.USER.FETCHED,
        data: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: "err",
      });
    });
};

//get All users
const getAllUsersServiceFunc = async (req, res) => {
  //   UserMac.find()
  //     .populate('user')
  //     .populate('mac', 'mac')
  //     .exec()
  //     .then((docs) => {
  //       console.log('200', docs);
  //       res.json({
  //         status: 200,
  //         count: docs.length,
  //         users: docs.map((doc, key) => {
  //           console.log('205', doc);
  //           return {
  //             _id: doc && doc.user._id,
  //             firstName: doc && doc.user.firstName,
  //             lastName: doc && doc.user.lastName,
  //             role: doc && doc.user.role,
  //             mac: doc && doc.mac && doc.mac.mac,
  //             email: doc && doc.user.email,
  //             createdAt: doc && doc.user.createdAt,
  //             updatedAt: doc && doc.user.updatedAt,
  //           };
  //           // }
  //         }),
  //       });
  //     })
  //     .catch((err) => {
  //       res.json({
  //         status: 500,
  //         success: false,
  //         message: err,
  //       });
  //     });
};

module.exports = {
  registerServiceFunc,
  loginServiceFunc,
  getUserViaEmailServiceFunc,
  getAllUsersServiceFunc,
};
