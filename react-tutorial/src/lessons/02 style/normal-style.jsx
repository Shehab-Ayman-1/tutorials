import React, { Component } from "react";
import "./style.scss";

export class NormalStyle extends Component {
	state = {
		color: "green",
		font: "f-20",
		activeState: true,
		activeClass: "green",
	};
	render = () => (
		<div className={`styles ${this.state.font}`}>
			<div className="state-class">
				<h3 className={this.state.color}>Colors From State</h3>
				<h3 className={this.state.font}>Font Size From State</h3>
				<button className="mybtn" onClick={() => this.setState({ color: "green" })}>
					Green
				</button>
				<button className="mybtn" onClick={() => this.setState({ color: "crimson" })}>
					Crimson
				</button>
			</div>

			<hr />

			<div className="active-class">
				<h3 className={this.state.activeState ? "green" : "crimson"}>Active Color</h3>
				<button
					className="mybtn"
					onClick={() =>
						this.setState({
							activeState: !this.state.activeState,
							activeClass: this.state.activeState ? "green" : "crimson",
						})
					}>
					{this.state.activeClass === "green" ? "Active Green" : "Active Crimson"}
				</button>
			</div>
		</div>
	);
}
