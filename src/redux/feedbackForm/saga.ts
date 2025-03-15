import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios"; // Import Axios for making HTTP requests
import { feedbackFormSuccess, feedbackFormFail } from "./action";
import { FEEDBACK_FORM_REQUEST } from "./constant";
import { feedbackFormResponse, feedbackFormRequest } from "./types";
import api from "../../api";
import handleError from "../components/errorHandler";

function* feedbackForm(action: feedbackFormRequest) {
  try {


    const response: AxiosResponse<feedbackFormResponse> = yield call(axios.post, `${api.feedback}`, action.payload);
    const { data } = response;
    yield put(feedbackFormSuccess(data));
  } catch (error) {
    // const errorMessage: string = "";
    const errorMessage: string = yield handleError(error);
    yield put(feedbackFormFail(errorMessage));
  }
}

function* feedbackFormSaga() {
  yield takeEvery(FEEDBACK_FORM_REQUEST, feedbackForm);
}

export default feedbackFormSaga;