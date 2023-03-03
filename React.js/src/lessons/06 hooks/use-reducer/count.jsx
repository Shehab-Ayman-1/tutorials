import React, { useReducer } from "react";
import getActions from "./actions/count";

export default function Count() {
	const [count, dispatch] = useReducer(getActions, 0); // [actions, default value]
	return (
		<div>
			<div className="count">
				Counter: <span className="main-color">{count}</span>
			</div>
			<button className="mybtn" onClick={() => dispatch("INCREAMENT")}>
				Increament
			</button>
			<button className="mybtn" onClick={() => dispatch("DECREAMENT")}>
				Decreament
			</button>
		</div>
	);
}
