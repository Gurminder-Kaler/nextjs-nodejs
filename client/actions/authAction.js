import axios from "axios";
import { toast } from "react-toastify";

export const loginAction = (data) => {
  // console.log("KKKKK authAction", d ata);
  axios
    .post("/api/auth/login", data)
    .then((result) => {
      // console.log('authAction result', result);
      toast(result.data.message, {
        position: "top-right",
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

const registerAction = (data) => {
  console.log("KKKKK authAction", data);
  axios.post("/api/auth/register", data);
};

export default loginAction;
