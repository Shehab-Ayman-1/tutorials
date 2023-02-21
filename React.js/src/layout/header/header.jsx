import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function Header() {
	let [time, setTime] = useState(new Date());

	let openNavbar = () => {
		let navbar = document.querySelector("nav.nav-bar");
		navbar.classList.remove("hide-left-clip");
	};

	setInterval(() => {
		setTime(new Date());
	}, 1000);

	return (
		<header className="header">
			<div className="logo">
				<i className="fa fa-bars" data-empty onClick={openNavbar}></i>
				<Link to="/" className="logo-title">
					<img src="/logo192.png" alt="logo" className="logo-img fa-spin" />
					React Tutorial
				</Link>
			</div>
			<h3 className="time-now main-color">
				Time Now: <span className="second-color">{time.toLocaleTimeString()}</span>
			</h3>
		</header>
	);
}
