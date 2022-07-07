import { GET_ALL_PRODUCTS } from "@/store/types";
// import isEmpty from "@/validations/is-empty";
import { getLocalStore } from "next-persist";

const initialState = {
  products: [],
  product: {}
};
const persistedState = getLocalStore("productReducer", initialState);

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = persistedState, action) {
  
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
