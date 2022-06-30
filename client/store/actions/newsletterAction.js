import axios from "axios";
import { toast } from "react-toastify";
      
export const subscribeToNewsletterAction = (data) => {
  console.log("KKKKK newsletter action", data);
  axios
    .post("/api/newsletter/subscribeToNewsletter", data)
    .then((result) => {
      toast(result.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((err) => {
      toast(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export default subscribeToNewsletterAction;
