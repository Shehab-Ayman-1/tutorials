import React, { Component } from "react";

export class Hello extends Component {
	render() {
		return (
			<div className="f-20" style={{ paddingLeft: "50px" }}>
				<h3>
					Hello <span className="second-color">{this.props.name}</span>
				</h3>
			</div>
		);
	}
}
