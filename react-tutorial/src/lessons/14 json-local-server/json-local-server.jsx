/* 
	[1] npm i -g json-server
	[2] npm i json-server 
	[3] In package.json/scripts add [ "server": "json-server --watch db/todos.json -p 5000" ]
	[4] npm run server 
	[5] Look To The To-Do-List Script Below Now 
*/

import React, { useEffect, useState } from "react";
import { getTodos, addNewTask, deleteNewTask, updateNewTask, updateIsFinished } from "./orders";

export default function ToDoList() {
	let [tasks, setTasks] = useState([]);

	let newID = () => {
		let timmy = Date.now().toString(36).toLocaleUpperCase();
		let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER)
			.toString(36)
			.slice(0, 12)
			.padStart(12, "0")
			.toLocaleUpperCase();
		return `${timmy}-${randy}`;
	};

	useEffect(() => {
		getTodos().then((res) => setTasks(res));
	}, []);

	let handleIsFinished = (event, task) => {
		const index = tasks.indexOf(task);
		const newTasks = tasks;

		newTasks[index].isFinished = !newTasks[index].isFinished;
		setTasks(newTasks);
		updateIsFinished(task.id, task);

		if (newTasks[index].isFinished) {
			event.target.style.textDecoration = "line-through";
			event.target.style.color = "red";
		} else {
			event.target.style.textDecoration = "none";
			event.target.style.color = "white";
		}
	};

	let handleKey = (event) => {
		let key = event.key;
		if (key === "Enter") addTask();
	};

	let addTask = () => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let id = newID();
			let newTasks = { id, isFinished: false, task: input.value };
			setTasks([...tasks, newTasks]);
			addNewTask(newTasks);
			input.value = "";
			input.focus();
		} else {
			alert("Please Enter The Task Name...");
			input.focus();
		}
	};

	let deleteTask = (task) => {
		let toDos = [...tasks];
		let index = tasks.indexOf(task);
		toDos.splice(index, 1);
		deleteNewTask(task.id);
		setTasks(toDos);
	};

	let updateTask = (task, index) => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let toDos = [...tasks];
			toDos[index].task = input.value;
			setTasks(toDos);
			updateNewTask(task.id, toDos[index]);
			input.value = "";
			input.focus();
		} else {
			alert("please Enter The New Task Update");
			input.focus();
		}
	};

	let clearTasks = () => {
		const emptyTasks = tasks;
		emptyTasks.map((item) => {
			deleteNewTask(item.id);
			setTasks([]);
		});
	};

	const styledIco = { padding: "5px 15px", fontSize: "1.8rem" };

	const syledTaskContent = (task) => {
		return {
			textDecoration: task.isFinished ? "line-through" : "none",
			color: task.isFinished ? "crimson" : "white",
			padding: "15px 10px",
			borderBottom: "1px solid #4b4b4b",
			cursor: "pointer",
		};
	};
	return (
		<div className="to-do-list">
			<input type="text" className="task-input" placeholder="Task Name..." onKeyDown={handleKey} />
			<button className="mybtn" onClick={addTask}>
				add Task
			</button>

			<ul className="task-list">
				{tasks.map((task, index) => {
					return (
						<li className="task" key={index}>
							<p className="task-content" style={syledTaskContent(task)} onClick={(event) => handleIsFinished(event, task)}>
								{task.task}
							</p>
							<i className="fa fa-share" style={{ ...styledIco, color: "white" }} onClick={() => updateTask(task, index)}></i>
							<i className="second-color fa fa-trash" style={styledIco} onClick={() => deleteTask(task)}></i>
						</li>
					);
				})}
				{tasks.length > 0 ? (
					<button className="mybtn clear-Tasks" onClick={clearTasks}>
						Clear All Tasks
					</button>
				) : null}
			</ul>
		</div>
	);
}
