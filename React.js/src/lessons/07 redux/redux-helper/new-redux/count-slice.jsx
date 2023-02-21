import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
	name: "counter",
	initialState: { count: 0, payload: 1, value: 10 },
	reducers: {
		increament: (state) => {
			state.count += state.payload;
		},
		decreament: (state) => {
			state.count -= state.payload;
		},
		addPayload: (state, action) => {
			console.log(action);
			state.count = state.count + action.payload.value;
		},
		minusPayload: (state, action) => {
			state.count = state.count > 0 ? state.count - action.payload.value : state.count;
		},
		reset: (state) => {
			state.count = 0;
		},
	},
});

export const { increament, addPayload, decreament, minusPayload, reset } = countSlice.actions;
export default countSlice.reducer;
