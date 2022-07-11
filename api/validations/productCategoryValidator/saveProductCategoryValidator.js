const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function saveProductCategoryValidator(payload) {
  let errors = {};
  
  payload.title = !isEmpty(payload.title) ? payload.title : "";
  if (Validator.isEmpty(payload.title)) {
    errors.title = "Title is required";
  }
  
  payload.im = !isEmpty(payload.im) ? payload.im : "";
  if (Validator.isEmpty(payload.im)) {
    errors.im = "Title is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
