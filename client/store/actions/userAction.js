import axios from "axios";
import { toast } from "react-toastify";
import { GET_ERRORS, GET_ALL_USERS } from "@/store/types";


export const getAllUsersAction = (dispatch) => {
  axios
    .post("/api/user/getAllUsers")
    .then((result) => {
      if (result.data.success) {
        dispatch(getAllUsers(result.data.data));
      } else {
        dispatch({
          type: GET_ERRORS,
          payload:
            result.data && result.data.message
              ? result.data.message
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

// Set logged in user
export const getAllUsers = (pay) => {
  return {
    type: GET_ALL_USERS,
    payload: pay,
  };
};

export default getAllUsersAction;
