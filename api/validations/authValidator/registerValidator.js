const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateRegisterInput(data) {
  
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.role = !isEmpty(data.role) ? data.role : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = "Role field is required";
  }

  if (!Validator.isIn(data.role, ["CUSTOMER", "ADMIN"])) {
    errors.role = "Role can either be ADMIN or CUSTOMER only!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else {
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm Password field is required";
  } else {
    if (!Validator.isLength(data.confirmPassword, { min: 6, max: 30 })) {
      errors.confirmPassword = "Confirm Password must be at least 6 characters";
    }
  }
  if (data.confirmPassword != data.password) {
    errors.confirmPassword =
      "Confirm Password field does not match the password field";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
