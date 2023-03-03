import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function UseLocation() {
	const { state } = useLocation();
	const navigate = useNavigate();

	// if (!name || !age) return alert("Go To Use Navigate Hook To Receive Our States");

	console.log(state);

	return (
		<div className="f-20">
			<h1 className="main-color">Use Location Route</h1>
			{state ? (
				<Fragment>
					<h3>
						First State: <span className="second-color">{state.first}</span>
					</h3>
					<h3>
						Second State: <span className="second-color">{state.second}</span>
					</h3>
				</Fragment>
			) : (
				<button className="mybtn" onClick={() => navigate("/hooks/use-navigate")}>
					To Fetch Data Navigate To Use Navigate Route
				</button>
			)}
		</div>
	);
}
