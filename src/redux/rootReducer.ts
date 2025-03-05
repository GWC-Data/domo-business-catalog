import { combineReducers } from "redux";
import { userCheckReducer } from "./registerUser/reducer";
import { registerFormReducer } from "./registerForm/reducer";

const rootReducer = combineReducers({
  auth: userCheckReducer,
  registerForm: registerFormReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;