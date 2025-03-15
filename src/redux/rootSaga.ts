import { all } from "redux-saga/effects";
import userCheckSaga from "./registerUser/saga";
import registerFormSaga from "./registerForm/saga";
import feedbackFormSaga from "./feedbackForm/saga";

function* rootSaga() {
  yield all([
    userCheckSaga(),
    registerFormSaga(),
    feedbackFormSaga()
  ]);
}

export default rootSaga;