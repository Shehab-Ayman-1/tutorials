import { Component } from "react";

export class ComponentDidUpdate extends Component {
	state = {
		name: "",
		age: "",
	};

	componentDidUpdate = () => {
		console.log("Component Did Update [If Any Element In The Page Was Updated]");
	};

	handleValue = (event) => {
		let name = event.target.name;
		this.setState({ ...this.state, [name]: event.target.value });
	};

	getInput = () => {
		return (
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="username" onChange={(event) => this.handleValue(event)} />
				<br />
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="username" onChange={(event) => this.handleValue(event)} />
			</div>
		);
	};

	render = () => <div className="component-did-update f-20">{this.getInput()}</div>;
}
