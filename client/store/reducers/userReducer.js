import {
  GET_ALL_USERS,
  USER_LOADING,
  GET_USER_VIA_ID,
  UPDATE_USER,
} from "../types";

import { getLocalStore } from "next-persist";

const initialState = {
  users: [],
  user: {},
  loading: false,
};
const persistedState = getLocalStore('userReducer', initialState);
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = persistedState, action) {
  
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER_VIA_ID:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
