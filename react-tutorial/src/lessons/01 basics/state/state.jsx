import React, { Component } from "react";

export class States extends Component {
	state = {
		fName: "shehab",
		lName: "ayman",
		friend: "Farha",
		age: 21,
		countries: {
			egypt: "Alexandria",
			England: "London",
			France: "Paris",
		},
		skills: ["html", "css", "js", "react", "scss | sass", "Bootstrap", "json", "ajax", "pug.js", "gulp.js"],
		daysInLife: () => this.state.age * 365,
		controlComponent: "Automatic Update The State Value => ",
	};

	// We Use Arrow Function In OnCLick() To Callback This Function, Because It Has A Paramater
	changeName(myfriend) {
		this.setState({ friend: myfriend });
	}

	// We Don't Neet To Use Arrow Function In OnCLick() While Callback This Function, Because It Hasn't Any Paramaters
	myFriend = () => {
		return this.state.friend;
	};

	updateState = (event) => {
		this.setState({ ...this.state });
		this.setState({ controlComponent: event.target.value });
	};

	render() {
		return (
			<div className="f-20">
				<p className="second-color">
					My Name Is: <span className="main-color">{this.state.fName + " " + this.state.lName}</span>
				</p>
				<p className="second-color">
					My Friend Name Is: <span className="main-color">{this.myFriend()}</span>
				</p>
				<p className="second-color">
					My Age Is: <span className="main-color">{this.state.age} Years</span>
				</p>
				<p className="second-color">
					My Location Now Is: <span className="main-color">{this.state.countries.egypt}</span>
				</p>
				<p className="second-color">
					My Skills Are: <span className="main-color">{this.state.skills.map((item) => item + " - ")}</span>
				</p>
				<p className="second-color">
					My Days In Life Is: <span className="main-color">{this.state.daysInLife()} Day</span>
				</p>
				<p className="second-color">
					Leave Message For Us: <br />
					<input type="text" value={this.state.controlComponent} onChange={this.updateState} />
					<span className="main-color"> {this.state.controlComponent}</span>
				</p>
				<div className="btns">
					<button className="mybtn" type="button" onClick={() => this.setState({ friend: "Salma" })}>
						Salma
					</button>{" "}
					|{" "}
					<button className="mybtn" type="button" onClick={() => this.changeName("aya")}>
						Aya
					</button>{" "}
					|{" "}
					<button className="mybtn" type="button" onClick={() => this.changeName("Farha")}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}
