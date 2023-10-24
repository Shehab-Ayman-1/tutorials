import { useState } from "react";
import "./style.scss";

export const Style = () => {
	const [state, setState] = useState({ color: "green", font: "f-20", activeState: true, activeClass: "green" });

	return (
		<div className={`styles ${state.font}`}>
			<div className="state">
				<h3 className={state.color}>Colors From State</h3>
				<h3 className={state.font}>Font Size From State</h3>
				<button className="mybtn" onClick={() => setState({ ...state, color: "green" })}>
					Green
				</button>
				<button className="mybtn" onClick={() => setState({ ...state, color: "crimson" })}>
					Crimson
				</button>
			</div>

			<hr />

			<div className="active">
				<h3 className={state.activeState ? "green" : "crimson"}>Active Color</h3>
				<button
					className="mybtn"
					onClick={() =>
						setState({
							...state,
							activeState: !state.activeState,
							activeClass: state.activeState ? "green" : "crimson",
						})
					}>
					{state.activeClass === "green" ? "Active Green" : "Active Crimson"}
				</button>
			</div>
		</div>
	);
};
