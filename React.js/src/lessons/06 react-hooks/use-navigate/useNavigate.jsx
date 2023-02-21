import React from "react";
import { useNavigate } from "react-router-dom";

export function UseNavigate() {
	const navigate = useNavigate();

	let handleNavigate = () => navigate("/");

	return (
		<div>
			<button className="mybtn" onClick={handleNavigate}>
				Use Navigate To Home Page
			</button>
		</div>
	);
}
