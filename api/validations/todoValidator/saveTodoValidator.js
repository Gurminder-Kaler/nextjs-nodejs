const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function saveTodoValidator(payload) {
  let errors = {};
  payload.title = !isEmpty(payload.title) ? payload.title : "";

  if (Validator.isEmpty(payload.title)) {
    errors.email = "Title is required";
  }

  payload.body = !isEmpty(payload.body) ? payload.body : "";
  if (Validator.isEmpty(payload.body)) {
    errors.email = "Body is required";
  }

  payload.status = !isEmpty(payload.status) ? payload.status : "";
  if (Validator.isEmpty(payload.status)) {
    errors.email = "Status is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
