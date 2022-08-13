import React, { useState } from "react";

export function UseState() {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [location] = useState({ city: "Alexandria", country: "Egypt" });

	let handle = (event) => {
		let id = event.target.id;
		let value = event.target.value;
		if (id === "email") {
			setEmail(value);
		}
		if (id === "username") {
			setUsername(value);
		}
	};

	return (
		<div className="f-20">
			<h3 className="main-color">
				The Country States Are:
				<span className="second-color">
					{location.city} | {location.country}
				</span>
			</h3>
			<h3 className="main-color">
				The Username State Is: <span className="second-color">{username}</span>
			</h3>
			<h3 className="main-color">
				The Email State Is: <span className="second-color">{email}</span>
			</h3>
			<div>
				<label htmlFor="username" className="main-color pointer">
					Username:
				</label>
				<br />
				<input type="text" id="username" placeholder="Enter Your UserName" onChange={handle} />
			</div>
			<div>
				<label htmlFor="email" className="main-color pointer">
					Email:
				</label>
				<br />
				<input type="text" id="email" placeholder="Enter Your Email..." onChange={handle} />
			</div>
		</div>
	);
}
