import React, { Component } from "react";
import { AuthContext } from "../context/create-context";

class contextTypeWithComponent extends Component {
	render() {
		return (
			<div className="f-20">
				<h3 className="dark-color">Second Component .js</h3>
				<span className="main-color">Theme Color: </span> <span className="second-color">{this.context.theme}</span>{" "}
				<br />
				<span className="main-color">user data: </span>
				<span className="second-color">
					{this.context.data.name} | {this.context.data.age} | {this.context.data.country}
				</span>
				<br />
				<button className="mybtn" onClick={() => this.context.handleTheme()}>
					Change The Theme Color
				</button>
			</div>
		);
	}
}

contextTypeWithComponent.contextType = AuthContext;

// hint: If We Need To Use The Context Data Out The Context.Consumer, It Will Be Like That

export default contextTypeWithComponent;
