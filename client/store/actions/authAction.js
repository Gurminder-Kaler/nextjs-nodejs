import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_ROLE,
  LOGOUT,
} from "@/store/types";
import setAuthToken from "@/utils/setAuthToken";

export const loginAction = async (data, push, dispatch) => {
  await axios
    .post("/api/auth/login", data)
    .then((res) => {
      console.log('RESSSS,', res);
      if (res.data.success) {
        const { token, user } = res.data;
        const role = user.role;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("role", role);
        setAuthToken(token);
        // const decoded = jwt_decode(token);

        dispatch(setCurrentRole(role));
        dispatch(setCurrentUser(user));
        // toast(res.data.message, {
        //   position: "top-left",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        push("/");
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

export const registerAction = async (data, push, dispatch) => {
  await axios
    .post("/api/auth/register", data)
    .then((res) => {
      console.log('RESSSS,', res);
      if (res.data.success) {
        const { token, user } = res.data;

        const role = user.role;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("role", role);
        setAuthToken(token);
        // const decoded = jwt_decode(token);

        dispatch(setCurrentRole(role));
        dispatch(setCurrentUser(user));
        // toast(res.data.message, {
        //   position: "top-left",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        push("/");
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

// Log user out
export const logoutAction = (push, dispatch) => {
  // Remove token and role from localStorage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("role");
  // setAuthToken(null);
  dispatch(setCurrentUser({}));
  dispatch(setCurrentRole({}));
  dispatch(logoutUserAction);

  push("/");

  // history.push("/login");
};

// Set logged in user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
// Set logged in user's role
export const setCurrentRole = (role) => {
  return {
    type: SET_CURRENT_USER_ROLE,
    payload: role,
  };
};

export const logoutUserAction = (abc) => {
  return {
    type: LOGOUT,
  };
};

export default loginAction;
