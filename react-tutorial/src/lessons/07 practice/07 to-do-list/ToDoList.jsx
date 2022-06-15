import React, { useState } from "react";

const initialState = [
	{
		isFinished: false,
		task: "Fitness Practice",
	},
	{
		isFinished: false,
		task: "Study For School",
	},
	{
		isFinished: false,
		task: "Learn React Course",
	},
];

export default function ToDoList() {
	let [tasks, setTask] = useState(initialState);

	let handleIsFinished = (event, task) => {
		const index = tasks.indexOf(task);
		const newTasks = tasks;
		newTasks[index].isFinished = !newTasks[index].isFinished;
		setTask(newTasks);
		if (newTasks[index].isFinished === true) {
			event.target.style.textDecoration = "line-through";
			event.target.style.color = "red";
			console.log(newTasks[index]);
		} else {
			event.target.style.textDecoration = "none";
			event.target.style.color = "white";
			console.log(newTasks[index]);
		}
	};

	let handleKey = (event) => {
		let key = event.key;
		if (key === "Enter") addTask();
	};

	let addTask = () => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let newTasks = [...tasks, { isFinished: false, task: input.value }];
			setTask(newTasks);
			input.value = "";
			input.focus();
		} else {
			alert("Please Enter The Task Name...");
			input.focus();
		}
	};

	let deleteTask = (index) => {
		let toDoList = [...tasks];
		toDoList.splice(index, 1);
		setTask(toDoList);
	};

	let updateTask = (index) => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let toDos = [...tasks];
			toDos[index].task = input.value;
			setTask(toDos);
			input.value = "";
			input.focus();
		} else {
			alert("please Enter The New Task Update");
			input.focus();
		}
	};

	let clearTasks = () => {
		setTask([]);
	};

	const style = { padding: "5px 20px", fontSize: "1.8rem", margin: "0 10px", border: "1px solid var(--second-color)" };
	return (
		<div className="to-do-list">
			<input type="text" className="task-input" placeholder="Task Name..." onKeyDown={handleKey} />
			<button className="mybtn" onClick={addTask}>
				add Task
			</button>
			<ul className="task-list">
				{tasks.map((task, index) => (
					<li className="task" key={index}>
						<p
							className="task-content"
							style={{ margin: "15px 10px", cursor: "pointer" }}
							onClick={(event) => handleIsFinished(event, task)}>
							{task.task}
						</p>
						<i className="fa fa-share" style={{ ...style, color: "white" }} onClick={() => updateTask(index)}></i>
						<i className="second-color fa fa-trash" style={style} onClick={() => deleteTask(index)}></i>
					</li>
				))}
				{tasks.length > 0 ? (
					<button className="mybtn clear-Tasks" onClick={clearTasks}>
						Clear All Tasks
					</button>
				) : null}
			</ul>
		</div>
	);
}
