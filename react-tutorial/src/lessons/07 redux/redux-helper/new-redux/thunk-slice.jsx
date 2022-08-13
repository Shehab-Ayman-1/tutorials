import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk("usersData", async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
	return response.data;
});

const thunkSlice = createSlice({
	name: "apiData",
	initialState: { loading: null, data: [], error: null },

	reducers: {
		RESETDATA: (state, action) => {
			state.loading = null;
			state.data = [];
			state.error = null;
		},
	},

	// extraReducers => Is Using To Let The Action Is Working As A Default Without Dispatcher
	extraReducers: {
		// This Action Is Work While The Website Is Waiting The Data From The Api
		[fetchApiData.pending]: (state, action) => {
			state.loading = true;
			state.error = false;
		},
		// This Action Is Work If The Request Is Success, To Load The Data In The State
		[fetchApiData.fulfilled]: (state, action) => {
			let stringify = (newData) => localStorage.setItem("data", JSON.stringify(newData));
			let parse = () => JSON.parse(localStorage.getItem("data"));

			state.error = false;
			state.loading = false;

			for (let i = 0; i < action.payload.length; i++) {
				if (action.payload[i]) {
					let item = action.payload[i];
					item.img = `https://source.unsplash.com/720x400/?photos/:${i + 1}`;
					state.data.push(item);
				}
			}

			if (action.payload.length > 0) {
				stringify(action.payload);
				state.data = parse();
			} else {
				stringify([]);
				state.data = parse();
			}
		},
		// This Action Is Work To Get The Error While The Asynchronous Function Is Not Get The Data From The Api
		[fetchApiData.rejected]: (state, action) => {
			state.loading = null;
			state.error = true;
		},
	},
});

export const { RESETDATA } = thunkSlice.actions;

export default thunkSlice.reducer;
