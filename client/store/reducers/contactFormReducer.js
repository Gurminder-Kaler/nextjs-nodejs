import { GET_ALL_CONTACT_FORMS } from "@/store/types";
// import isEmpty from "@/validations/is-empty";
import { getLocalStore } from "next-persist";

const initialState = {
  contactForms: [],
};
const persistedState = getLocalStore("contactFormReducer", initialState);

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = persistedState, action) {
  switch (action.type) {
    case GET_ALL_CONTACT_FORMS:
      return {
        ...state,
        contactForms: action.payload,
      };
    default:
      return state;
  }
}
