import { Component } from "react";

export default class componentDidMount extends Component {
	state = {
		visible: true,
	};

	componentWillUnmount = () => {
		console.log("component Will UnMount [If Any Element In The Page Was Created Or Deleted]");
	};

	handleVisible = () => {
		this.setState({ visible: !this.state.visible });
	};

	getInput = () => {
		return (
			<div>
				<label htmlFor="username">Username</label> <br />
				<input type="text" placeholder="username" />
			</div>
		);
	};

	render = () => (
		<div className="component-did-unmount f-20">
			{this.state.visible ? this.getInput() : null}

			<button className="mybtn" onClick={() => this.handleVisible()}>
				{this.state.visible ? "Visible" : "Un Visible"}
			</button>
		</div>
	);
}
