import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
	name: "sign",
	initialState: { username: "", email: "", password: "", state: false },
	reducers: {
		LOGIN(states, { payload }) {
			if (payload.username && payload.email && payload.password) {
				states = { ...states, ...payload, state: true };
				console.log(states);
			}
		},
		LOGOUT(states, action) {
			states = { username: "", email: "", password: "", state: false };
			console.log(states);
		},
	},
});

export const { LOGIN, LOGOUT } = signSlice.actions;
