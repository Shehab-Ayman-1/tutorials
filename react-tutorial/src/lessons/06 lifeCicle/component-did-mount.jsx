import { Component } from "react";

export default class componentDidMount extends Component {
	componentDidMount = () => {
		console.log("component Did Mount [Work Just One Time,  Refresh The Page To Work]");
	};
	render = () => (
		<div className="f-20">
			<hr />
			<label htmlFor="username">Username</label> <br />
			<input type="text" placeholder="username" />
		</div>
	);
}
