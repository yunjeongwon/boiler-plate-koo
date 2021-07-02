import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootRedux = combineReducers({
  userReducer,
});

export default rootRedux;
