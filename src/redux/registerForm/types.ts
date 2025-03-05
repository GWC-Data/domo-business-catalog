import { REGISTER_FORM_REQUEST, REGISTER_FORM_SUCCESS, REGISTER_FORM_FAIL, REGISTER_FORM_RESET } from "./constant";

export interface registerFormResponse {
  message: string;
  success: boolean;
}

export interface registerFormReqData {
  fingerprint: string;
  name: string;
  email: string;
  location: string;
  company: string;
  position: string;
}

export interface registerFormRequest {
  type: typeof REGISTER_FORM_REQUEST;
  payload: registerFormReqData;
}

interface registerFormSuccess {
  type: typeof REGISTER_FORM_SUCCESS;
  payload: registerFormResponse;
}

interface registerFormFail {
  type: typeof REGISTER_FORM_FAIL;
  payload: string;
}
interface registerFormReset {
  type: typeof REGISTER_FORM_RESET;
}

export interface initialStateTypes {
  loading: boolean;
  data: null | registerFormResponse[];
  error: null | string;
}

export type registerFormActionTypes = registerFormRequest | registerFormSuccess | registerFormFail | registerFormReset;