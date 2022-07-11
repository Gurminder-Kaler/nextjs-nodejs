const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function saveProductCategoryValidator(payload) {
  let errors = {};
  
  payload.title = !isEmpty(payload.title) ? payload.title : "";

  // payload.img = !isEmpty(payload.img) ? payload.img : "";

  if (Validator.isEmpty(payload.title)) {
    errors.title = "Title is required";
  }
  
  // payload.img = !isEmpty(payload.img) ? payload.img : "";
  // if (Validator.isEmpty(payload.img)) {
  //   errors.img = "Image is required";
  // }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
