import { registerFormReqData, registerFormResponse } from "./types";
import { REGISTER_FORM_REQUEST, REGISTER_FORM_SUCCESS, REGISTER_FORM_FAIL, REGISTER_FORM_RESET } from "./constant";

export const registerFormRequest = (data: registerFormReqData) => ({
  type: REGISTER_FORM_REQUEST,
  payload: data,
});

export const registerFormSuccess = (data: registerFormResponse) => ({
  type: REGISTER_FORM_SUCCESS,
  payload: data,
});

export const registerFormFail = (error: string) => ({
  type: REGISTER_FORM_FAIL,
  payload: error,
});
export const registerFormReset = () => ({
  type: REGISTER_FORM_RESET
});