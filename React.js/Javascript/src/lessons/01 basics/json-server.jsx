/* 
	[1] npm i -g json-server
	[2] npm i json-server 
	[3] In package.json/scripts add [ "my-json-server": "json-server --w db/todos.json -p 5000" ]
	[4] npm run json-server 
	[5] Look To The order.jsx Below Now 
*/

import { useEffect, useRef, useState } from "react";
import axios from "axios";

// Frontend
export function JsonLocalServer() {
	const [tasks, setTasks] = useState([]);
	const inputRef = useRef(null);

	useEffect(() => {
		GET_TODOS().then((res) => setTasks(res));
	}, []);

	const generateID = () => {
		let timmy = Date.now().toString(36).toLocaleUpperCase();
		let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER)
			.toString(36)
			.slice(0, 12)
			.padStart(12, "0")
			.toLocaleUpperCase();
		return `${timmy}-${randy}`;
	};

	const handleKey = (event) => {
		if (event.key === "Enter") addTask();
	};

	const complitedTask = (event, task) => {
		const index = tasks.indexOf(task);
		const newTasks = tasks;

		newTasks[index].complited = !newTasks[index].complited;

		setTasks(newTasks);
		COMPLITED_TASK(task.id, task);

		if (newTasks[index].complited) {
			event.target.style.textDecoration = "line-through";
			event.target.style.color = "red";
		} else {
			event.target.style.textDecoration = "none";
			event.target.style.color = "white";
		}
	};

	const addTask = () => {
		let id = generateID();
		let newTask = { id, complited: false, task: inputRef.current.value };

		if (inputRef.current.value) {
			setTasks([...tasks, newTask]);
			ADD_TASK(newTask);
			inputRef.current.value = "";
			inputRef.current.focus();
		} else {
			alert("Please Enter The Task Name...");
			inputRef.current.focus();
		}
	};

	const updateTask = (task, index) => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let toDos = [...tasks];
			toDos[index].task = input.value;

			setTasks(toDos);
			UPDATE_TASK(task.id, toDos[index]);

			input.value = "";
			input.focus();
		} else {
			alert("please Enter The New Task Update");
			input.focus();
		}
	};

	const deleteTask = (task) => {
		let toDos = [...tasks];
		let index = tasks.indexOf(task);

		toDos.splice(index, 1);
		setTasks(toDos);

		DELETE_TASK(task.id);
	};

	const clearTasks = () => {
		tasks.forEach((task) => DELETE_TASK(task.id));
		setTasks([]);
	};

	const iconStyle = { padding: "5px 15px", fontSize: "1.8rem" };

	const taskContentStyle = (task) => ({
		textDecoration: task.complited ? "line-through" : "none",
		color: task.complited ? "crimson" : "white",
		padding: "15px 10px",
		borderBottom: "1px solid #4b4b4b",
		cursor: "pointer",
	});

	return (
		<div className="to-do-list">
			<input ref={inputRef} type="text" className="task-input" placeholder="Task Name..." onKeyDown={handleKey} />
			<button className="mybtn" onClick={addTask}>
				add Task
			</button>

			<ul className="task-list">
				{tasks.map((task, index) => {
					return (
						<li className="task" key={index}>
							<p className="task-content" style={taskContentStyle(task)} onClick={(event) => complitedTask(event, task)}>
								{task.task}
							</p>
							<i className="fa fa-share" style={{ ...iconStyle, color: "white" }} onClick={() => updateTask(task, index)}></i>
							<i className="second-color fa fa-trash" style={iconStyle} onClick={() => deleteTask(task)}></i>
						</li>
					);
				})}
				{tasks.length && (
					<button className="mybtn clear-Tasks" onClick={clearTasks}>
						Clear All Tasks
					</button>
				)}
			</ul>
		</div>
	);
}

// Backend Utilities
export async function GET_TODOS() {
	const response = await axios.get("http://localhost:5000/todos");
	const data = await response.data;
	return data;
}

export async function ADD_TASK(task) {
	const response = await axios.post("http://localhost:5000/todos", task);
	return response;
}

export async function UPDATE_TASK(id, newTask) {
	const response = await axios.put(`http://localhost:5000/todos/${id}`, newTask);
	return response;
}

export async function COMPLITED_TASK(id, value) {
	const response = await axios.put(`http://localhost:5000/todos/${id}`, value);
	const data = await response.data;
	return data;
}

export async function DELETE_TASK(id) {
	const response = await axios.delete(`http://localhost:5000/todos/${id}`);
	return response;
}
