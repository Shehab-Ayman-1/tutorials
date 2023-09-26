import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, RESET_TASKS, UPDATE_TASK } from "./slices";

export function ReduxTodos() {
	const [updatedTask, setUpdatedTask] = useState("");
	const [newTask, setNewTask] = useState("");
	const { todos } = useSelector(({ todos }) => todos);
	const dispatch = useDispatch();

	const createTask = () => {
		dispatch(ADD_TASK(newTask));
		setNewTask("");
	};

	const updateTask = (event, id, value) => {
		dispatch(UPDATE_TASK({ id, task: value }));
	};

	const deleteTask = (id) => {
		dispatch(DELETE_TASK(id));
	};

	const resetTasks = () => {
		dispatch(RESET_TASKS());
	};

	const compliteTask = (id) => {
		dispatch(COMPLETE_TASK(id));
	};

	const handlePress = (event) => {
		if (event.key === "Enter") createTask();
	};

	const handleUpdatedStyle = (event) => {
		const input = event.target.closest("button").previousElementSibling;
		const icon = event.target.closest("button").querySelector("i");
		const checkbox = input.previousElementSibling;

		input.disabled = !input.disabled;
		input.focus();

		input.style.color = "orange";
		checkbox.checked = false;
		icon.className = icon.className === `fa fa-plus` ? "fa fa-pen" : "fa fa-plus";
	};

	return (
		<div className="to-do-list">
			<div className="add-field">
				<input type="text" onKeyDown={handlePress} value={newTask} placeholder="New Task" onChange={(e) => setNewTask(e.target.value)} />
				<button className="mybtn" onClick={createTask}>
					add
				</button>
			</div>

			<ul className="task-list">
				{todos.map(({ id, task, complited }, i) => (
					<li key={i} className="task">
						<input type="checkbox" name="complited" checked={complited} onClick={() => compliteTask(id)} onChange={(e) => {}} style={{ width: "fit-content", margin: 0 }} />

						<input
							type="text"
							className="task-content"
							name="task"
							value={task}
							onChange={(e) => updateTask(e, id, e.target.value)}
							style={{ color: complited ? "green" : "orange", border: "none", borderBottom: "1px solid #6e6969" }}
							disabled
						/>

						<button type="button" className="mybtn toDos-btn" onClick={handleUpdatedStyle}>
							<i className="fa fa-pen" style={{ color: "white" }} />
						</button>

						<button type="button" className="mybtn toDos-btn" onClick={() => deleteTask(id)}>
							<i className="fa fa-trash" style={{ color: "white" }} />
						</button>
					</li>
				))}
			</ul>
			<button type="button" className="mybtn" onClick={resetTasks}>
				Reset Tasks
			</button>
		</div>
	);
}
