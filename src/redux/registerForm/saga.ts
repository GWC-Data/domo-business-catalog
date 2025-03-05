import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios"; // Import Axios for making HTTP requests
import { registerFormSuccess, registerFormFail } from "./action";
import { REGISTER_FORM_REQUEST } from "./constant";
import { registerFormResponse, registerFormRequest } from "./types";
import api from "../../api";
import handleError from "../components/errorHandler";

function* registerForm(action: registerFormRequest) {
  try {


    const response: AxiosResponse<registerFormResponse> = yield call(axios.post, `${api.register}`, action.payload);
    const { data } = response;
    yield put(registerFormSuccess(data));
  } catch (error) {
    // const errorMessage: string = "";
    const errorMessage: string = yield handleError(error);
    yield put(registerFormFail(errorMessage));
  }
}

function* registerFormSaga() {
  yield takeEvery(REGISTER_FORM_REQUEST, registerForm);
}

export default registerFormSaga;