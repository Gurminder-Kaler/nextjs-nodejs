import isEmpty from "@/validations/is-empty";
import { GET_ERRORS } from "@/store/types";

const error = false;
export const contactFormValidator = (data, dispatch) => {
  let msg = {};
  if (isEmpty(data.name)) {
    msg.name = "Name is required";
    error = true;
  } else if (isEmpty(data.email)) {
    msg.email = "Email is required";
    error = true;
  } else if (isEmpty(data.subject)) {
    msg.subject = "Subject is required";
    error = true;
  } else if (isEmpty(data.message)) {
    msg.message = "Message is required";
    error = true;
  } else {
    error = false;
    return false;
  }
  if (error == true) {
    dispatch({
      type: GET_ERRORS,
      payload: msg,
    });
    return true;
  }
};

// export const error;

export default contactFormValidator;
