const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function contactFormValidator(payload) {
  let errors = {};
  payload.name = !isEmpty(payload.name) ? payload.name : "";
  payload.email = !isEmpty(payload.email) ? payload.email : "";
  payload.subject = !isEmpty(payload.subject) ? payload.subject : "";
  payload.message = !isEmpty(payload.message) ? payload.message : "";

  if (Validator.isEmpty(payload.name)) {
    errors.name = "Name is required";
  }

  payload.email = !isEmpty(payload.email) ? payload.email : "";

  if (Validator.isEmpty(payload.email)) {
    errors.email = "Email is required";
  }

  payload.subject = !isEmpty(payload.subject) ? payload.subject : "";

  if (Validator.isEmpty(payload.subject)) {
    errors.subject = "Subject is required";
  }

  payload.message = !isEmpty(payload.message) ? payload.message : "";

  if (Validator.isEmpty(payload.message)) {
    errors.message = "Message is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
