import { combineReducers } from "redux";
import { userCheckReducer } from "./registerUser/reducer";
import { registerFormReducer } from "./registerForm/reducer";
import { feedbackFormReducer } from "./feedbackForm/reducer";

const rootReducer = combineReducers({
  auth: userCheckReducer,
  registerForm: registerFormReducer,
  feedbackForm: feedbackFormReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;