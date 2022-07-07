const messages = require("@constants/messages");
const User = require("@models/userModel");

//getAllUsers
const getAllUsersServiceFunc = async (req, res) => {
  console.log("req", req.body);
  User.find().then((outerResult) => {
    console.log("outerResult", outerResult);
    if (outerResult) {
      return res.json({
        status: 200,
        success: true,
        data: outerResult,
        message: messages.SUCCESS.USER.FETCHED,
      });
    } else {
      return res.json({
        status: 401,
        success: false,
        message: messages.FAILURE.NO_USERS_FOUND,
      });
    }
  });
};

module.exports = {
  getAllUsersServiceFunc,
};
