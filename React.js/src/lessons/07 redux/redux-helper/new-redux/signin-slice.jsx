import { createSlice } from "@reduxjs/toolkit";

const signSlice = createSlice({
	name: "signin",
	initialState: { type: null, myUsername: null, myEmail: null, myPassword: null, myState: false },
	reducers: {
		Login(state, action) {
			if (action.payload.username && action.payload.email && action.payload.password) {
				console.log(action.payload); // { type: "", [payloadL { username: "", email: "", password: "" } ]}
				state.myUsername = action.payload.username;
				state.myEmail = action.payload.email;
				state.myPassword = action.payload.password;
				state.myState = true;
			}
		},
		LogOff(state, action) {
			console.log(action); // { type: "", [payloadL { username: "", email: "", password: "" } ]}
			state.myUsername = "";
			state.myEmail = "";
			state.myPassword = "";
			state.myState = false;
		},
	},
});

export const { Login, LogOff } = signSlice.actions;
export default signSlice.reducer;
