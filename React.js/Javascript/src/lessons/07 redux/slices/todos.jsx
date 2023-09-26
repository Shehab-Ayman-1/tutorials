import { createSlice } from "@reduxjs/toolkit";

const setStorage = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

export const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
	},
	reducers: {
		ADD_TASK: ({ todos }, { payload }) => {
			const task = { id: new Date().getTime().toString(), task: payload, complited: false };
			todos.push(task);
			setStorage(todos);
		},

		UPDATE_TASK: ({ todos }, { payload }) => {
			const taskIndex = todos.findIndex(({ id }) => id === payload.id);
			todos.splice(taskIndex, 1, { ...payload, complited: false });
			setStorage(todos);
		},

		DELETE_TASK: ({ todos }, { payload }) => {
			const taskIndex = todos.findIndex(({ id }) => id === payload);
			todos.splice(taskIndex, 1);
			setStorage(todos);
		},

		COMPLETE_TASK: ({ todos }, { payload }) => {
			const taskIndex = todos.findIndex(({ id }) => id === payload);
			todos[taskIndex].complited = !todos[taskIndex].complited;
			setStorage(todos);
		},

		RESET_TASKS: (state, action) => {
			state.todos = [];
			setStorage([]);
		},
	},
});

export const { ADD_TASK, DELETE_TASK, UPDATE_TASK, COMPLETE_TASK, RESET_TASKS } = todosSlice.actions;
