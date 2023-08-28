import type { Task } from "../types";
import { loadTasks } from "./loadTasks";
import { saveTasks } from "./saveTasks";

const list = document.querySelector<HTMLUListElement>("#tasks-list");
const input = document.querySelector<HTMLInputElement>("#task-input");

export const updateTask = (id: string) => {
	const tasks: Task[] = loadTasks();
	const target = tasks.findIndex((task) => task.id === id);
	if (!input?.value || target === -1) return;

	tasks[target].title = input.value;
	saveTasks(tasks);

	list?.querySelectorAll("input").forEach((inputEle) => {
		if (inputEle.id === id && inputEle?.nextElementSibling) {
			inputEle.nextElementSibling.textContent = input.value;
		}
	});
};
