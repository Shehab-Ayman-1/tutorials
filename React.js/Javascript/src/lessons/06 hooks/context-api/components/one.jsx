import { Component } from "react";
import { AuthContext } from "../context/create-context";

export default class cosumerWithComponent extends Component {
	createElement = ({ theme, data, handleTheme }) => {
		return (
			<div className="f-20">
				<h3 className="dark-color">First Component .js</h3>
				<span className="main-color">Theme Color: </span> <span className="second-color">{theme}</span> <br />
				<span className="main-color">user data: </span>
				<span className="second-color">
					{data.name} | {data.age} | {data.country}
				</span>
				<br />
				<button className="mybtn" onClick={handleTheme}>
					Change The Theme Color
				</button>
			</div>
		);
	};

	render = () => (
		<AuthContext.Consumer>
			{/*  */}
			{this.createElement}
		</AuthContext.Consumer>
	);
}
