import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0, payload: 1, value: 10 },
	reducers: {
		INCREAMENT: (state) => {
			state.count += state.payload;
		},
		DECREAMENT: (state) => {
			state.count -= state.payload;
		},
		ADD_PAYLOAD: (state, action) => {
			console.log(action);
			state.count = state.count + action.payload.value;
		},
		MINUS_PAYLOAD: (state, action) => {
			state.count = state.count > 0 ? state.count - action.payload.value : state.count;
		},
		RESET_COUNTER: (state) => {
			state.count = 0;
		},
	},
});

export const { INCREAMENT, DECREAMENT, ADD_PAYLOAD, MINUS_PAYLOAD, RESET_COUNTER } = counterSlice.actions;
