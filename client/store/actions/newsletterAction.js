import axios from "axios";
import { toast } from "react-toastify";
import { GET_ALL_NEWSLETTER_EMAILS, GET_ERRORS } from "@/store/types";

export const subscribeToNewsletterAction = (data, dispatch) => {
  axios
    .post("/api/newsletter/subscribeToNewsletter", data)
    .then((result) => {
      console.log("result", result);
      let msg = result.data.message;
      let message = msg[Object.keys(msg)[0]];
      if (result.data.success == false) {
        dispatch({
          type: GET_ERRORS,
          payload: msg ? msg : "Something Went Wrong",
        });
      }
      toast(message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

export const getAllNewsletterEmailsAction = (dispatch) => {
  axios
    .post("/api/newsletter/getAllNewsletterEmails")
    .then((result) => {
      if (result.data.success) {
        dispatch(getAllNewsletterEmails(result.data.data));
      } else {
        dispatch({
          type: GET_ERRORS,
          payload:
            res.data && res.data.message
              ? res.data.message
              : "Something Went Wrong",
        });
      }
      // toast(result.data.message, {
      //   position: "top-left",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
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

export const getAllNewsletterEmails = (passed) => {
  return {
    type: GET_ALL_NEWSLETTER_EMAILS,
    payload: passed,
  };
};

export default subscribeToNewsletterAction;
