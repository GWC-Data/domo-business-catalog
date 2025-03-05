import { userCheckResponse } from "./types";
import { USER_CHECK_REQUEST, USER_CHECK_SUCCESS, USER_CHECK_FAIL } from "./constant";

export const userCheckRequest = () => ({
  type: USER_CHECK_REQUEST,
});

export const userCheckSuccess = (data: userCheckResponse) => ({
  type: USER_CHECK_SUCCESS,
  payload: data,
});

export const userCheckFail = (error: string) => ({
  type: USER_CHECK_FAIL,
  payload: error,
});