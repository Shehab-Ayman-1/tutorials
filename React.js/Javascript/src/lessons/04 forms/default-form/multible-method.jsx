import { Component } from "react";

class MulipleForm extends Component {
	state = {
		text: "Enter Your Dynamic UserName: ",
		textarea: "Enter Your Dynamic Message: ",
		selected: "gulp.js",
		radio: "Vue.js",
		checked: false,
	};

	handleMultipleStates(event) {
		let name = event.target.name;
		let value;

		if (name === "checked") value = event.target.checked;
		if (name === "radio") value = event.target.id;
		else value = event.target.value;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<form className="f-20 form">
				<h4 className="main-color" style={{ textAlign: "center" }}>
					Multiple Methode For Each Input
				</h4>

				<div className="text-input">
					<label htmlFor="text">UserName: </label>
					<input type="text" name="text" value={this.state.text} onChange={(event) => this.handleMultipleStates(event)} />
				</div>

				<div className="text-area">
					<label htmlFor="text-area">Message: </label>
					<textarea name="textarea" value={this.state.textarea} onChange={(event) => this.handleMultipleStates(event)} />
				</div>

				<div className="select-box">
					<label htmlFor="select">Select Your Skill: </label>
					<select name="selected" defaultValue={this.state.selected} onChange={(event) => this.handleMultipleStates(event)}>
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
					<input type="checkbox" name="checked" id="checked" defaultChecked={this.state.checked} onChange={(event) => this.handleMultipleStates(event)} />
					<label htmlFor="checked">Remember Me</label>
				</div>

				<div className="radio-btns">
					<div className="btn">
						<label htmlFor="JavaScript.js">JavaScript</label>
						<input type="radio" name="radio" id="JavaScript.js" checked={this.state.radio === "JavaScript.js"} onChange={(event) => this.handleMultipleStates(event)} />
					</div>
					<div className="btn">
						<label htmlFor="Vue.js">Vue.js</label>
						<input type="radio" name="radio" id="Vue.js" checked={this.state.radio === "Vue.js"} onChange={(event) => this.handleMultipleStates(event)} />
					</div>
					<div className="btn">
						<label htmlFor="React.js">React.js</label>
						<input type="radio" name="radio" id="React.js" checked={this.state.radio === "React.js"} onChange={(event) => this.handleMultipleStates(event)} />
					</div>
					<div className="btn">
						<label htmlFor="Angular.js">Angular.js</label>
						<input type="radio" name="radio" id="Angular.js" checked={this.state.radio === "Angular.js"} onChange={(event) => this.handleMultipleStates(event)} />
					</div>
				</div>
			</form>
		);
	}
}
export default MulipleForm;
