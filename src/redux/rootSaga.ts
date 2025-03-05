import { all } from "redux-saga/effects";
import userCheckSaga from "./registerUser/saga";
import registerFormSaga from "./registerForm/saga";

function* rootSaga() {
  yield all([
    userCheckSaga(),
    registerFormSaga()
  ]);
}

export default rootSaga;