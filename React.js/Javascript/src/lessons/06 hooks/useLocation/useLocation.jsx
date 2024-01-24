import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function UseLocation() {
	const { state } = useLocation();
	const navigate = useNavigate();

	// if (!name || !age) return alert("Go To Use Navigate Hook To Receive Our States");

	console.log(state);

	return (
		<div className="f-20">
			<div className="">
				<h3 className="main-color">UseLocation</h3>
				<small>It Used To Get The State That Through In useNavigate Hook</small>
			</div>

			<hr />

			{state && <h3>First State: {state.first}</h3>}
			{state && <h3>Second State: {state.second}</h3>}

			{!state && (
				<button className="mybtn" onClick={() => navigate("/hooks/use-navigate")}>
					To Fetch Data Navigate To Use Navigate Route
				</button>
			)}
		</div>
	);
}
