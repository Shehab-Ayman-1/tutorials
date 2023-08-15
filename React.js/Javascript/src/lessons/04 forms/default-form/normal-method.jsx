import React, { useState } from "react";

export default function NormalForm() {
	let [text, setText] = useState("Enter Your UserName: ");
	let [textarea, setTextarea] = useState("Enter Your Message: ");
	let [selected, setSelected] = useState("react");
	let [checked, setChecked] = useState(true);
	let [radio, setRadio] = useState("Angular");

	let handleInput = (event) => setText(event.target.value);

	let handleTextArea = (event) => setTextarea(event.target.value);

	let handleSelect = (event) => setSelected(event.target.value);

	let handleChecked = (event) => setChecked(event.target.checked);

	let handleRadio = (event) => setRadio(event.target.id);

	return (
		<form className="f-20 form">
			<h4 className="main-color" style={{ textAlign: "center" }}>
				Single Methode For Each Input
			</h4>

			<div className="text-input">
				<label htmlFor="text">UserName: </label>
				<input type="text" id="text" value={text} onChange={handleInput} />
			</div>

			<div className="text-area">
				<label htmlFor="text-area">Message: </label>
				<textarea id="text-area" value={textarea} onChange={handleTextArea} />
			</div>

			<div className="select-box">
				<label htmlFor="select">Select Your Skill: </label>
				<select name="select-box" id="mySelectBox" defaultValue={selected} onChange={handleSelect}>
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="js">js</option>
					<option value="react">react</option>
					<option value="scss">scss</option>
					<option value="bootstrap">bootstrap</option>
					<option value="gulp.js">gulp.js</option>
					<option value="pug.js">pug.js</option>
				</select>
			</div>

			<div className="check-box">
				<input type="checkbox" id="checkbox" defaultChecked={checked} onChange={handleChecked} />
				<label htmlFor="checkbox">Remember Me</label>
			</div>

			<div className="radio-btns">
				<div className="btn">
					<label htmlFor="JavaScript">JavaScript</label>
					<input type="radio" id="JavaScript" checked={radio === "JavaScript"} onChange={handleRadio} />
				</div>
				<div className="btn">
					<label htmlFor="Vue">Vue.js</label>
					<input type="radio" id="Vue" checked={radio === "Vue"} onChange={handleRadio} />
				</div>
				<div className="btn">
					<label htmlFor="React">React.js</label>
					<input type="radio" id="React" checked={radio === "React"} onChange={handleRadio} />
				</div>
				<div className="btn">
					<label htmlFor="Angular">Angular.js</label>
					<input type="radio" id="Angular" checked={radio === "Angular"} onChange={handleRadio} />
				</div>
			</div>
		</form>
	);
}
