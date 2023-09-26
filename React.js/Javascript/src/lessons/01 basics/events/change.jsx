import { Component } from "react";

export class Change extends Component {
	state = {
		fName: "Shehab",
		lName: "Ayman",
		count: 0,
	};

	// We Have 2 Ways To Create The Function
	// [1] Event As An Argument
	updateFirstName(event) {
		return this.setState({ fName: event.target.value });
	}

	// [2] Bind Event
	updateLastName(event) {
		return this.setState({ lName: event.target.value });
	}

	render() {
		return (
			<div className="f-20">
				<h3 className="main-color">
					My First Name Is: <span className="second-color">{this.state.fName}</span>
				</h3>
				<input placeholder="Enter Your New First Name..." onChange={(event) => this.updateFirstName(event)} />

				<h3 className="main-color">
					My Last Name Is: <span className="second-color">{this.state.lName}</span>
				</h3>
				<input placeholder="Enter Your New Last Name..." onChange={this.updateLastName.bind(this)} />
			</div>
		);
	}
}
