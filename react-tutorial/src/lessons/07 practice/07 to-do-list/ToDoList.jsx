import React, { useState } from "react";

export default function ToDoList() {
	let [tasks, setTask] = useState(["Fitness Practice", "Study For School", "Learn React Course"]);

	let addTask = () => {
		let input = document.querySelector(".to-do-list .task-input");
		if (input.value) {
			let newTasks = [...tasks, input.value];
			setTask(newTasks);
			input.value = "";
			input.focus();
		} else {
			alert("Please Enter The Task Name...");
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
			let toDoList = [...tasks];
			toDoList[index] = input.value;
			setTask(toDoList);
		} else {
			alert("please Enter The New Task Update");
		}
	};

	let clearTasks = () => {
		setTask([]);
	};

	const style = { padding: "5px 15px", fontSize: "1.5rem", marginLeft: "15px" };
	return (
		<div className="to-do-list">
			<input type="text" className="task-input" placeholder="Task Name..." />
			<button className="mybtn" onClick={addTask}>
				add
			</button>
			<ul className="task-list">
				{tasks.map((item, index) => (
					<li className="task" key={index}>
						<p className="task-content">{item}</p>
						<button className="mybtn" style={style} onClick={() => updateTask(index)}>
							Update
						</button>
						<button className="mybtn" style={style} onClick={() => deleteTask(index)}>
							Delete
						</button>
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
