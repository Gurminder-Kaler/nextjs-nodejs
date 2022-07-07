const mongoose = require("mongoose");
const messages = require("@constants/messages");
const Newsletter = require("@models/newsletterModel");

const newsletterValidator = require("@validations/newsletterValidator/newsletterValidator");

//getAllNewsletterEmails
const getAllNewsletterEmails = async (req, res) => {
  console.log("req", req.body);
  Newsletter.find().then((outerResult) => {
    console.log("outerResult", outerResult);
    if (outerResult) {
      return res.json({
        status: 200,
        success: true,
        data: outerResult,
        message: messages.SUCCESS.NEWSLETTER.FETCHED,
      });
    } else {
      return res.json({
        status: 401,
        success: false,
        message: messages.FAILURE.NO_EMAILS_FOUND,
      });
    }
  });
};

//subscribeToNewsletter
const subscribeToNewsletter = async (req, res) => {
  console.log("req node jssss", req.body);
  const { errors, isValid } = newsletterValidator(req.body);
  if (!isValid) {
    return res.json({
      status: 400,
      success: false,
      message: errors,
    });
  }
  Newsletter.findOne({ newsletterEmail: req.body.newsletterEmail }).then(
    (outerResult) => {
      if (!outerResult) {
        const newsletter = new Newsletter({
          _id: new mongoose.Types.ObjectId(),
          newsletterEmail: req.body.newsletterEmail,
        });
        newsletter.save().then((kk) => {
          return res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.NEWSLETTER.SUBSCRIBED,
          });
        });
      } else {
        return res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.ALREADY_SUBSCRIBED,
        });
      }
    }
  );
};

//un-subscribe to newsletter
const unsubscribeToNewsletter = async (req, res) => {
  console.log("req", req.body);
  const find = { newsletterEmail: req.body.newsletterEmail };
  Newsletter.findOne(find).then((outerResult) => {
    if (outerResult) {
      const updateFields = {};
      updateFields.subscribed = false;
      Newsletter.update({ _id: outerResult._id }, { $set: updateFields })
        .then((i) => {
          res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.NEWSLETTER.UNSUBSCRIBED,
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            success: false,
            message: err && err.message ? err.message : "",
          });
        });
    } else {
      res.json({
        status: 401,
        success: false,
        message: messages.FAILURE.EMAIL_NOT_SUBSCRIBED_TO_NEWSLETTER,
      });
    }
  });
};
module.exports = {
  subscribeToNewsletter,
  unsubscribeToNewsletter,
  getAllNewsletterEmails,
};
