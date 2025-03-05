import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios"; // Import Axios for making HTTP requests
import { userCheckSuccess, userCheckFail } from "./action";
import { USER_CHECK_REQUEST } from "./constant";
import { userCheckResponse } from "./types";
import api from "../../api";
import handleError from "../components/errorHandler";

function* userCheck() {
  try {
    const response: AxiosResponse<userCheckResponse> = yield call(axios.get, `${api.users}`);
    const { data } = response;
    yield put(userCheckSuccess(data));
  } catch (error) {
    // const errorMessage: string = "";
    const errorMessage: string = yield handleError(error);
    yield put(userCheckFail(errorMessage));
  }
}

function* userCheckSaga() {
  yield takeEvery(USER_CHECK_REQUEST, userCheck);
}

export default userCheckSaga;