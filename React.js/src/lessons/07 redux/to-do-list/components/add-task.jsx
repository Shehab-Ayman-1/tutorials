import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDTASK } from "../../redux-helper/new-redux/to-do-list-slice";

export default function AddTask() {
	const [newTask, setNewTask] = useState("");
	const dispatch = useDispatch();

	let handleAddTask = () => {
		let id = new Date().getTime();
		if (newTask && newTask !== "") dispatch(ADDTASK({ task: { id, order: newTask, complited: false } }));
		setNewTask("");
		document.querySelector("input.task-content").focus();
	};

	let handlePress = (event) => {
		if (event.key === "Enter") {
			handleAddTask();
		}
	};

	return (
		<>
			<input
				type="text"
				value={newTask ? newTask : ""}
				placeholder="New Task"
				onKeyDown={handlePress}
				onChange={(e) => setNewTask(e.target.value)}
			/>
			<button className="mybtn" onClick={handleAddTask}>
				add
			</button>
		</>
	);
}
