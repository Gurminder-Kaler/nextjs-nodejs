const mongoose = require("mongoose");
const messages = require("@constants/messages");
const ContactForm = require("@models/contactFormModel");

const contactFormValidator = require("@validations/contactFormValidator/contactFormValidator");

//contactFormSubmit
const contactFormSubmitServiceFunc = async (req, res) => {
  const { errors, isValid } = contactFormValidator(req.body);
  if (!isValid) {
    return res.json({
      status: 400,
      success: false,
      message: errors,
    });
  }
  console.log("req", req.body);
  const contactForm = new ContactForm({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  contactForm.save().then((kk) => {
    return res.json({
      status: 200,
      success: true,
      message: messages.SUCCESS.CONTACT_FORM.SUBMITTED,
    });
  });
};

//getAllContactForms
const getAllContactFormsServiceFunc = async (req, res) => {
  console.log("req", req.body);
  ContactForm.find().then((outerResult) => {
    console.log("outerResult", outerResult);
    if (outerResult) {
      return res.json({
        status: 200,
        success: true,
        data: outerResult,
        message: messages.SUCCESS.CONTACT_FORM.FETCHED,
      });
    } else {
      return res.json({
        status: 401,
        success: false,
        message: messages.FAILURE.NO_CONTACT_FORMS_FOUND,
      });
    }
  });
};
module.exports = {
  contactFormSubmitServiceFunc,
  getAllContactFormsServiceFunc,
};
