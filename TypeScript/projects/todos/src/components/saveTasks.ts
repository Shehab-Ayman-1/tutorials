import type { Task } from "../types";

export const saveTasks = (tasks: Task[]) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};
