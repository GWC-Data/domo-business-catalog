import { initialStateTypes, registerFormActionTypes } from "./types";
import { REGISTER_FORM_REQUEST, REGISTER_FORM_SUCCESS, REGISTER_FORM_FAIL, REGISTER_FORM_RESET } from "./constant";

const initialState: initialStateTypes = {
  loading: false,
  data: null,
  error: null,
};

export const registerFormReducer = (state = initialState, action: registerFormActionTypes) => {
  switch (action.type) {
    case REGISTER_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case REGISTER_FORM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REGISTER_FORM_RESET:
      return initialState;
    default:
      return state;
  }
};