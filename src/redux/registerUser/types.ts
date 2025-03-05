import { USER_CHECK_REQUEST, USER_CHECK_SUCCESS, USER_CHECK_FAIL } from "./constant";

export interface userCheckResponse {
  _id: string;
  fingerprint: string;
  name: string;
  email: string;
  location: string;
  company: string;
  position: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface userCheckRequest {
  type: typeof USER_CHECK_REQUEST;
}

interface userCheckSuccess {
  type: typeof USER_CHECK_SUCCESS;
  payload: userCheckResponse[];
}

interface userCheckFail {
  type: typeof USER_CHECK_FAIL;
  payload: string;
}

export interface initialStateTypes {
  loading: boolean;
  data: null | userCheckResponse[];
  error: null | string;
}

export type userCheckActionTypes = userCheckRequest | userCheckSuccess | userCheckFail;