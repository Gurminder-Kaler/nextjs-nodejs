import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import newsletterReducer from "./newsletterReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
  newsletter: newsletterReducer,
  product: productReducer,
});
