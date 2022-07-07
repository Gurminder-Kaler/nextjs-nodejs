const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function loginValidator(payload) {
  let errors = {};
  
  payload.email = !isEmpty(payload.email) ? payload.email : "";
  if (Validator.isEmpty(payload.email)) {
    errors.email = "Email is required";
  }

  payload.password = !isEmpty(payload.password) ? payload.password : "";
  if (Validator.isEmpty(payload.password)) {
    errors.password = "Password is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
