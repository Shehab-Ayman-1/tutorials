import type { Task } from "../types";

export const loadTasks = (): Task[] => {
	const tasks = localStorage.getItem("tasks");

	if (!tasks) return [];
	else return JSON.parse(tasks);
};
