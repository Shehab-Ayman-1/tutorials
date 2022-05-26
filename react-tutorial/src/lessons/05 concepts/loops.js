import React, { Component } from "react";

export default class loop extends Component {
	state = {
		mySkills: ["html", "css", "js", "react", "bootstrap", "scss", "gulp.js", "pug.js", "json", "ajax"],
	};
	render() {
		return (
			<div>
				<h3 className="f-30 main-color">My Skills Are: </h3>
				<ul>
					{this.state.mySkills.map((skill, i) => (
						<li className="f-20" key={i}>
							{i + 1 + " => " + skill}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
