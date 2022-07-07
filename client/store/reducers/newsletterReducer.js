import { GET_ALL_NEWSLETTER_EMAILS } from "@/store/types";
// import isEmpty from "@/validations/is-empty";
import { getLocalStore } from "next-persist";

const initialState = {
  newsletterEmails: [],
};
const persistedState = getLocalStore("newsletterReducer", initialState);

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = persistedState, action) {
  
  switch (action.type) {
    case GET_ALL_NEWSLETTER_EMAILS:
      return {
        ...state,
        newsletterEmails: action.payload,
      };
    default:
      return state;
  }
}
