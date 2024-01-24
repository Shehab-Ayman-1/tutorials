import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UseNavigate() {
	const navigate = useNavigate();
	const [state, setState] = useState({ first: "", second: "" });

	const handleChange = (event) => {
		setState((state) => ({ ...state, [event.target.name]: event.target.value }));
	};

	const handleNavigate = () => {
		if (!state.first || !state.second) return alert("Enter The First && Second States");
		navigate("/hooks/use-location", { state: { first: state.first, second: state.second } });
	};

	return (
		<div className="f-20">
			<div className="">
				<h3 className="main-color">UseNavigate</h3>
				<small>It Is Used To Navigate Between Pages, And Able To Send States Inside It</small>
			</div>

			<hr />

			<button className="mybtn" onClick={handleNavigate}>
				Navigate To Location Route
			</button>

			<br />

			<input type="text" placeholder="first state" name="first" onChange={handleChange} />
			<input type="text" placeholder="second state" name="second" onChange={handleChange} />
		</div>
	);
}
