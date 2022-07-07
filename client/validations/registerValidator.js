import isEmpty from "@/validations/is-empty";
import { GET_ERRORS } from "@/store/types";

const error = false;
export const registerValidator = (data, dispatch) => {
  let msg = {};
  if (isEmpty(data.firstName)) {
    msg.firstName = "First Name is required";
    error = true;
  } else if (isEmpty(data.email)) {
    msg.email = "Email is required";
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
  console.log('ERRRIR register validator ', error);
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
