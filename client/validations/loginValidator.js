import isEmpty from "@/validations/is-empty";
import { GET_ERRORS } from "@/store/types";

const error = false;
export const loginValidator = (data, dispatch) => {
    
  let msg = {};

  if (isEmpty(data.email)) {

    msg.email = "Email 1s is required";
    error = true;

  } else if (isEmpty(data.password)) {

    msg.password = " Password is required";
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
};

// export const error;

export default loginValidator;
