import { useState } from "react";
import "./style.scss";

const formState = { text: "", textarea: "", selected: "", radio: "react", trust: false };
export function DefaultForm() {
	const [formData, setFormData] = useState(formState);

	const handleChange = ({ target: { id, name, value, checked } }) => {
		if (name === "trust") return setFormData((f) => ({ ...f, trust: checked }));
		if (name === "skills") return setFormData((f) => ({ ...f, radio: id }));

		setFormData((f) => ({ ...f, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div className="parent-form f-20">
			<form className="form f-20" onSubmit={handleSubmit}>
				<h4 className="main-color" style={{ textAlign: "center" }}>
					Form Input Types
				</h4>

				<div className="text-input">
					<label htmlFor="text">Username: </label>
					<input type="text" id="text" name="text" value={formData.text} placeholder="Username" onChange={handleChange} />
				</div>

				<div className="text-area">
					<label htmlFor="textarea">Message: </label>
					<textarea name="textarea" id="textarea" value={formData.textarea} placeholder="Message" onChange={handleChange} />
				</div>

				<div className="select-box">
					<label htmlFor="select">Select Your Skills: </label>
					<select name="selected" onChange={handleChange}>
						<option value="">Select Your Skills</option>
						<option value="frontend">frontend developer</option>
						<option value="backend">backend developer</option>
						<option value="MERN">MERN Stack</option>
						<option value="nodejs">nodejs Developer</option>
					</select>
				</div>

				<div className="check-box">
					<input type="checkbox" name="trust" id="trust" checked={formData.trust} onChange={handleChange} />
					<label htmlFor="trust">Remember Me</label>
				</div>

				<div className="radio-btns">
					<div className="btn">
						<input type="radio" name="skills" id="javaScript" checked={formData.radio === "javaScript"} onChange={handleChange} />
						<label htmlFor="javaScript">JavaScript</label>
					</div>
					<div className="btn">
						<input type="radio" name="skills" id="vue" checked={formData.radio === "vue"} onChange={handleChange} />
						<label htmlFor="vue">Vue</label>
					</div>
					<div className="btn">
						<input type="radio" name="skills" id="react" checked={formData.radio === "react"} onChange={handleChange} />
						<label htmlFor="react">React</label>
					</div>
					<div className="btn">
						<input type="radio" name="skills" id="angular" checked={formData.radio === "angular"} onChange={handleChange} />
						<label htmlFor="angular">Angular</label>
					</div>
				</div>

				<button type="submit" className="mybtn">
					Submit
				</button>
			</form>
		</div>
	);
}
