import React, { Component } from "react";

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
