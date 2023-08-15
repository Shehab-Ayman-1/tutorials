import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./components/add-task";
import CompletedTask from "./components/completed";
import DeleteTask from "./components/delete-task";
import ResetTasks from "./components/reset-tasks";
import UpdateTask from "./components/update-task";

export function ReduxToDoList() {
	const states = useSelector((state) => state.myToDoList);
	const dispatch = useDispatch();

	const style = { border: "none", borderBottom: "1px solid #6e6969" };

	return (
		<div className="to-do-list">
			<div className="add-field">{AddTask()}</div>

			<ul className="task-list">
				{states.toDos.map((item, index) => (
					<li className="task" key={index} onClick={(event) => CompletedTask(event, item, states, dispatch)}>
						<input type="text" className="task-content" defaultValue={item.order} style={style} disabled />

						<button className="mybtn toDos-btn" data-update="u" onClick={(e) => UpdateTask(e, item, dispatch)}>
							Update
						</button>

						<button className="mybtn toDos-btn" onClick={() => DeleteTask(item, dispatch)}>
							Delete
						</button>
					</li>
				))}

				{states.toDos.length > 0 ? ResetTasks() : null}
			</ul>
		</div>
	);
}
