import React, { Component } from "react";

export function User(props) {
	return (
		<div className="f-20" style={{ paddingLeft: "50px" }}>
			<h3>
				My Name Is: <span className="second-color">{props.name}</span>
			</h3>
			<h3>
				My Age Is: <span className="second-color">{props.age}</span>
			</h3>
			<h3>
				My Country Is: <span className="second-color">{props.country}</span>
			</h3>
		</div>
	);
}

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

export class SendChildren extends Component {
	render() {
		return (
			<div className="f-20" style={{ paddingLeft: "50px" }}>
				<span className="second-color">{this.props.children}</span>
				We Can Get The Content From The Parent By [this.props.children] In The Child
			</div>
		);
	}
}
