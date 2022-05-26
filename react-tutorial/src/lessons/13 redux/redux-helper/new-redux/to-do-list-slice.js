import { createSlice } from "@reduxjs/toolkit";

const toDoListSlice = createSlice({
	name: "to-do-list",
	initialState: {
		toDos: [
			{ id: 1653463456167, order: "Sports", complited: false },
			{ id: 1653463467433, order: "Study", complited: false },
			{ id: 1653463484922, order: "Coding", complited: false },
		],
	},
	reducers: {
		ADDTASK: (state, action) => {
			state.toDos.push(action.payload.task);
			console.log("Add: ", action);
		},
		DELETETASK: (state, action) => {
			const index = state.toDos.findIndex((item) => item.order === action.payload.order);
			state.toDos.splice(index, 1);
			console.log("Delete: ", action);
		},
		UPDATETASK: (state, action) => {
			const index = state.toDos.findIndex((item) => item.id === action.payload.newTask.id);
			state.toDos[index].order = action.payload.updatedOrder;
			console.log("Update: ", action);
		},
		COMPLITETASK: (state, action) => {
			const index = state.toDos.findIndex((item) => item.id === action.payload.completedTask.id);
			state.toDos[index].complited = !action.payload.completedTask.complited;
			console.log("Complete: ", action);
		},
		RESET: (state, action) => {
			state.toDos = [];
			console.log("Complete: ", action);
		},
	},
});

export const { ADDTASK, DELETETASK, UPDATETASK, COMPLITETASK, RESET } = toDoListSlice.actions;
export default toDoListSlice.reducer;
