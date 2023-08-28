export type Task = {
	id: string;
	title: string;
	completed: boolean;
	createdAt: Date;
};

export type FinishTask = {
	tasks: Task[];
	task: Task;
	checkbox: HTMLInputElement;
	label: HTMLLabelElement;
	edit: HTMLElement;
	enableSaving: boolean;
};

export type CreateElement = {
	class: string;
	id: string;
	type: string;
	for: string;
	[key: string]: string;
};
