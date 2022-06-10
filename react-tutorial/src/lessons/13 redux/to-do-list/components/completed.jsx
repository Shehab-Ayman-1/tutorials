import React from "react";
import { useSelector } from "react-redux";
import { COMPLITETASK } from "../../redux-helper/new-redux/to-do-list-slice";

export default function CompletedTask(event, completedTask, states, dispatch) {
	const index = states.toDos.findIndex((item) => item.id === completedTask.id);
	const li = event.target.closest("li");
	const input = event.target.closest("input");
	console.log(states);

	dispatch(COMPLITETASK({ completedTask }));

	if (!states.toDos[index].complited && input) {
		input.style.cssText = "border: none; border-bottom: 1px solid #6e6969; cursor: pointer";
		li.style.background = "#222222";
		input.style.background = "#222222";
	} else if (states.toDos[index].complited && input) {
		input.style.cssText = "border: none; border-bottom: 1px solid #6e6969; cursor: pointer";
		li.style.background = "#130f40";
		input.style.background = "#130f40";
	}
}
