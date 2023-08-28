import type { Task } from "../types";
import { saveTasks } from "./saveTasks";
import { loadTasks } from "./loadTasks";

const tasks: Task[] = loadTasks();
const list = document.querySelector<HTMLUListElement>("#tasks-list");

export const deleteTask = (id: string) => {
	const target = tasks.findIndex((task) => task.id === id);
	if (target === -1) return;

	tasks.splice(target, 1);
	saveTasks(tasks);

	list?.querySelectorAll("input").forEach((input) => {
		if (input.id === id) input.parentElement?.remove();
	});
};
