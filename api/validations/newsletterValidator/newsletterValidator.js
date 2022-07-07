const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function newsletterValidator(payload) {
  let errors = {};
  
  payload.newsletterEmail = !isEmpty(payload.newsletterEmail) ? payload.newsletterEmail : "";
  if (Validator.isEmpty(payload.newsletterEmail)) {
    errors.newsletterEmail = "Newsletter Email is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
