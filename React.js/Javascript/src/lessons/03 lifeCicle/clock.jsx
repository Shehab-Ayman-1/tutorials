import { Component } from "react";

export class ComponentWillMount extends Component {
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
