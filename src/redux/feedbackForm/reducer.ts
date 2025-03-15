import { initialStateTypes, feedbackFormActionTypes } from "./types";
import { FEEDBACK_FORM_REQUEST, FEEDBACK_FORM_SUCCESS, FEEDBACK_FORM_FAIL, FEEDBACK_FORM_RESET } from "./constant";

const initialState: initialStateTypes = {
  loading: false,
  data: null,
  error: null,
};

export const feedbackFormReducer = (state = initialState, action: feedbackFormActionTypes) => {
  switch (action.type) {
    case FEEDBACK_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FEEDBACK_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FEEDBACK_FORM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FEEDBACK_FORM_RESET:
      return initialState;
    default:
      return state;
  }
};