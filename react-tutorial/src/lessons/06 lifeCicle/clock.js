import React, { Component } from "react";

export default class lifeCicle extends Component {
	state = {
		timeNow: new Date(),
	};
	componentWillMount() {
		setInterval(() => this.setState({ timeNow: new Date() }), 0);
	}

	render() {
		return <div className="f-30">The Time Now Is: {this.state.timeNow.toLocaleTimeString()}</div>;
	}
}
