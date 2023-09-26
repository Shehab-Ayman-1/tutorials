import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, signSlice, todosSlice, thunkSlice } from "./slices";

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		sign: signSlice.reducer,
		todos: todosSlice.reducer,
		thunk: thunkSlice.reducer,
	},
});
