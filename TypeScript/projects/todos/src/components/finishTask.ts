import type { FinishTask } from "../types";
import { saveTasks } from "./saveTasks";

export const finishTask = ({ tasks, task, checkbox, label, edit, enableSaving }: FinishTask) => {
	task.completed = checkbox.checked;

	if (task.completed) {
		label.setAttribute("class", "done");
		edit.style.cssText = `opacity: 0; cursor: initial`;
	} else {
		label.removeAttribute("class");
		edit.style.cssText = `opacity: 1; cursor: pointer`;
	}

	enableSaving && saveTasks(tasks);
};
