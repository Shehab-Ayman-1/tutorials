// The Old Way
import { createStore } from "redux";
import Reducers from "../old-redux/reducer/all-reducers";

// The New Way
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../new-redux/count-slice";
import signinSlice from "../new-redux/signin-slice";
import ToDoListSlice from "../new-redux/to-do-list-slice";
import thunkSlice from "../new-redux/thunk-slice";

// Simple Redux =>With CombineReducers()
// const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// export const oldStore = createStore(Reducers, enhance);

// Redux Toolkit => Without CombineReducers()
export const newStore = configureStore({
	reducer: {
		myCounter: countSlice,
		mySignin: signinSlice,
		myToDoList: ToDoListSlice,
		myThunk: thunkSlice,
	},
});
