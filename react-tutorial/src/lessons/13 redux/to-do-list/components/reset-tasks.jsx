import React from "react";
import { useDispatch } from "react-redux";
import { RESET } from "../../redux-helper/new-redux/to-do-list-slice";

export default function ResetTasks() {
	const dispatch = useDispatch();

	let handleResetTasks = () => {
		dispatch(RESET());
	};

	return (
		<button className="mybtn clear-Tasks" onClick={handleResetTasks}>
			Clear All Tasks
		</button>
	);
}
