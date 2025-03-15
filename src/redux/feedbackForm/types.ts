import { FEEDBACK_FORM_REQUEST, FEEDBACK_FORM_SUCCESS, FEEDBACK_FORM_FAIL, FEEDBACK_FORM_RESET } from "./constant";

export interface feedbackFormResponse {
  message: string;
  success: boolean;
}

export interface feedbackFormReqData {
  name: string;
  email: string;
  comment: string;
  rating: number;
}

export interface feedbackFormRequest {
  type: typeof FEEDBACK_FORM_REQUEST;
  payload: feedbackFormReqData;
}

interface feedbackFormSuccess {
  type: typeof FEEDBACK_FORM_SUCCESS;
  payload: feedbackFormResponse;
}

interface feedbackFormFail {
  type: typeof FEEDBACK_FORM_FAIL;
  payload: string;
}
interface feedbackFormReset {
  type: typeof FEEDBACK_FORM_RESET;
}

export interface initialStateTypes {
  loading: boolean;
  data: null | feedbackFormResponse[];
  error: null | string;
}

export type feedbackFormActionTypes = feedbackFormRequest | feedbackFormSuccess | feedbackFormFail | feedbackFormReset;