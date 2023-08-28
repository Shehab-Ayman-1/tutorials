import type { Task } from "../types";
import { createElement } from "./createElement";
import { deleteTask } from "./deleteTask";
import { finishTask } from "./finishTask";
import { updateTask } from "./updateTask";

const list = document.querySelector<HTMLUListElement>("#tasks-list");
const input = document.querySelector<HTMLInputElement>("#task-input");

export const addTask = (task: Task, tasks: Task[]) => {
	const li = createElement("li");
	const label = createElement("label", { class: "", id: "", for: task.id, type: "" });
	const checkbox = createElement("input", { class: "", id: task.id, for: "", type: "checkbox" });
	const date = createElement("span", { class: "date", id: "", for: "", type: "" });
	const trash = createElement("i", { class: "fas fa-trash-alt delete-btn", id: "", for: "", type: "" });
	const edit = createElement("i", { class: "fas fa-edit update-btn", id: "", for: "", type: "" });

	finishTask({ tasks, task, checkbox, label, edit, enableSaving: false });

	trash.addEventListener("click", () => deleteTask(task.id));
	edit.addEventListener("click", () => updateTask(task.id));
	checkbox.addEventListener("change", () => finishTask({ tasks, task, checkbox, label, edit, enableSaving: true }));

	label.append(task.title);
	date.append(new Date(task.createdAt).toLocaleDateString());
	li.append(edit, trash, checkbox, label, date);
	list?.append(li);

	input?.value && (input.value = "");
};
