import { useReducer } from "react";
import { INITIAL_STATES, Reducer } from "./actions/user";

export default function User() {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATES);

	const handleChange = ({ target, target: { type, name, value } }) => {
		switch (type) {
			case "text":
				return dispatch({ type: "CHANGE_INPUT", payload: { name, value } });

			case "number":
				return dispatch({ type: "CHANGE_NUMBER", payload: { name, value } });

			case "checkbox":
				return dispatch({ type: "CHANGE_CHECKED", payload: { name, value: target.checked } });

			case "textarea":
				return dispatch({ type: "CHANGE_ARRAY", payload: { name: "skills", value } });

			case "button":
				return dispatch({ type: "REMOVE_ARRAY", payload: { name: "skills", value: target.textContent } });

			case "file":
				return dispatch({ type: "CHANGE_FILE", payload: { name, value } });

			default:
				return;
		}
	};

	return (
		<div>
			<div>
				<input type="text" name="fName" placeholder="First Name" onChange={handleChange} />
				<input type="text" name="lName" placeholder="Last Name" onChange={handleChange} />
			</div>
			<div>
				<input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
				<input type="number" name="minBudged" placeholder="Min Budged" onChange={handleChange} />
			</div>
			<div style={{ paddingLeft: "20px" }}>
				<label htmlFor="isAvailable">Is Available ?</label>
				<input type="checkbox" id="isAvailable" name="isAvailable" style={{ width: "fit-content" }} onChange={handleChange} />
			</div>
			<div>
				<textarea type="textarea" placeholder="Seperate With Comma [,]" value={state.skills.join(", ")} onChange={handleChange} />
				<div style={{ paddingLeft: "20px" }}>
					My Skills:
					{state.skills?.map((skill, i) => (
						<button key={i} type="button" style={{ padding: "5px", fontSize: "16px", margin: "5px" }} onClick={handleChange}>
							{skill}
						</button>
					))}
				</div>
			</div>
			<div>
				<input type="file" name="images" onChange={handleChange} />
			</div>
		</div>
	);
}
