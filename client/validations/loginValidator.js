import isEmpty from "@/validations/is-empty";
import checkRegex from "@/validations/checkRegex";
import { GET_ERRORS } from "@/store/types";

const error = false;

export const loginValidator = (data, dispatch) => {
  let msg = {};

  if (isEmpty(data.email)) {
    msg.email = "Email is required";
    error = true;
  } else if (isEmpty(data.password)) {
    msg.password = " Password is required";
    error = true;
  } else if (checkRegex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,data.email) == false) {
    msg.email = "Invalid email format";
    error = true;
  } else {
    error = false;
  }
  if (error == true) {
    dispatch({
      type: GET_ERRORS,
      payload: msg,
    });
  }
  return error;
};

// export const error;

export default loginValidator;
