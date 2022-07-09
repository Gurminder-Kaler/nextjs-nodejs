import axios from "axios";
import { toast } from "react-toastify";
import { GET_ERRORS, GET_ALL_CONTACT_FORMS } from "@/store/types";

export const contactFormSubmitAction = (data, dispatch) => {
  axios
    .post("/api/contact/contactFormSubmit", data)
    .then((result) => {
      console.log("RESULT, general Actions", result);
      let msg = result.data.message;
      if (result.data.success == false) {
        let message = msg[Object.keys(msg)[0]];
        dispatch({
          type: GET_ERRORS,
          payload: message ? message : "Something Went Wrong",
        });
      } else {
        toast(msg, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch((err) => {
      toast(err, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};


export const getAllContactFormsAction = (dispatch) => {
  axios
    .post("/api/contact/getAllContactForms")
    .then((result) => {
      if (result.data.success) {
        dispatch(getAllContactForms(result.data.data));
      } else {
        dispatch({
          type: GET_ERRORS,
          payload:
            res.data && res.data.message
              ? res.data.message
              : "Something Went Wrong",
        });
      } 
    })
    .catch((err) => {
      toast(err, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const getAllContactForms = (passed) => {
  return {
    type: GET_ALL_CONTACT_FORMS,
    payload: passed,
  };
};

export default contactFormSubmitAction;
