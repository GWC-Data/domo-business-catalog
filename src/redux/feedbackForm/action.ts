import { feedbackFormReqData, feedbackFormResponse } from "./types";
import { FEEDBACK_FORM_REQUEST, FEEDBACK_FORM_SUCCESS, FEEDBACK_FORM_FAIL, FEEDBACK_FORM_RESET } from "./constant";

export const feedbackFormRequest = (data: feedbackFormReqData) => ({
  type: FEEDBACK_FORM_REQUEST,
  payload: data,
});

export const feedbackFormSuccess = (data: feedbackFormResponse) => ({
  type: FEEDBACK_FORM_SUCCESS,
  payload: data,
});

export const feedbackFormFail = (error: string) => ({
  type: FEEDBACK_FORM_FAIL,
  payload: error,
});
export const feedbackFormReset = () => ({
  type: FEEDBACK_FORM_RESET
});