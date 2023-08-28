import type { Task } from "./types";
import { v4 as uuid } from "uuid";
import { addTask, loadTasks, saveTasks } from "./components";
import { congrats } from "./layouts";

// Congrats
congrats();

// HTML Elements
const form = document.querySelector<HTMLFormElement>("#tasks-form");
const input = document.querySelector<HTMLInputElement>("#task-input");

// GET Tasks
let tasks: Task[] = loadTasks();
tasks.forEach((task) => addTask(task, tasks));

// Submit Form
form?.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!input?.value) return alert("Input Field Is Required.");

	const task: Task = { id: uuid(), title: input?.value, completed: false, createdAt: new Date() };
	tasks.push(task);

	addTask(task, tasks);
	saveTasks(tasks);
});
