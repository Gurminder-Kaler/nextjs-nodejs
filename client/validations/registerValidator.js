import isEmpty from "@/validations/is-empty";
import { GET_ERRORS } from "@/store/types";
import checkRegex from "@/validations/checkRegex";

const error = false;
export const registerValidator = (data, dispatch) => {
  let msg = {};
  if (isEmpty(data.firstName)) {
    msg.firstName = "First Name is required";
    error = true;
  } else if (isEmpty(data.email)) {
    msg.email = "Email is required";
    error = true;
  } else if (
    checkRegex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, data.email) == false
  ) {
    msg.email = "Invalid email format";
    error = true;
  } else if (isEmpty(data.password)) {
    msg.password = " Password is required";
    error = true;
  } else if (isEmpty(data.confirmPassword)) {
    msg.confirmPassword = "Confirm Password is required";
    error = true;
  } else if (data.password != data.confirmPassword) {
    msg.confirmPassword = "Confirm Password Mismatch";
    error = true;
  } else {
    error = false;
    return error;
  }
  console.log("ERRRIR register validator ", error);
  if (error == true) {
    dispatch({
      type: GET_ERRORS,
      payload: msg,
    });
    return error;
  }
};

// export const error;

export default registerValidator;
