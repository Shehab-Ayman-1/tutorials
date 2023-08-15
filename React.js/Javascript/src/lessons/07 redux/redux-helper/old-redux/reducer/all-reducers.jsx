import { combineReducers } from "redux";
import countReducer from "./count-reducer";
import signInReducer from "./signin-reducer";

export default combineReducers({
	myCounter: countReducer,
	mySignin: signInReducer,
});
