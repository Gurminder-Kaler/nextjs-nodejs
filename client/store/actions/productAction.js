import axios from "axios";
import { toast } from "react-toastify";
import { GET_ALL_PRODUCTS, GET_ERRORS } from "@/store/types";

export const getAllProductsAction = (dispatch) => {
  axios
    .post("/api/product/getAllProducts")
    .then((result) => {
      if (result.data.success) {
        dispatch(getAllProducts(result.data.data));
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

export const getAllProducts = (passed) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: passed,
  };
};

export default getAllProducts;
