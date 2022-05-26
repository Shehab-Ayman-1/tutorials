import { UPDATETASK } from "../../redux-helper/new-redux/to-do-list-slice";

export default function UpdateTask(event, newTask, dispatch) {
	let parent = event.target.parentElement;
	let btn = parent.querySelector("button[data-update]");
	let input = parent.querySelector("input");

	// Enable & Disable Update
	if (btn.dataset.update === "u") {
		btn.textContent = "new";
		btn.dataset.update = "new";
		input.removeAttribute("disabled");
		input.focus();
	} else {
		dispatch(UPDATETASK({ newTask, updatedOrder: input.value }));
		btn.textContent = "update";
		btn.dataset.update = "u";
		input.setAttribute("disabled", true);
	}
}
