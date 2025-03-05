import { initialStateTypes, userCheckActionTypes } from "./types";
import { USER_CHECK_REQUEST, USER_CHECK_SUCCESS, USER_CHECK_FAIL } from "./constant";

const initialState: initialStateTypes = {
  loading: false,
  data: null,
  error: null,
};

export const userCheckReducer = (state = initialState, action: userCheckActionTypes) => {
  switch (action.type) {
    case USER_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_CHECK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case USER_CHECK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};