import React, { useState } from "react";

export function UseState() {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [location] = useState({ city: "Alexandria", country: "Egypt" });
	const [counter, setCounter] = useState(0);

	let handleChange = (event) => {
		let id = event.target.id;
		let value = event.target.value;
		switch (id) {
			case "email":
				setEmail(value);
				break;
			case "username":
				setUsername(value);
				break;
			case "normal-increament":
				setCounter(counter + 1);
				break;
			case "good-increament":
				setTimeout(() => {
					setCounter((prev) => prev + 1);
				}, 2000);
				break;
			case "bad-increament":
				setTimeout(() => {
					setCounter(counter + 1);
				}, 2000);
				break;
			default:
				break;
		}
	};

	return (
		<div className="f-20">
			<h3 className="main-color">
				<p style={{ color: "white", fontSize: "18px" }}>
					When We Use The [Normal Increament] After The [Good Async Increament] Its Add Number On The Last Number Is Stored In The
					Counter State
				</p>
				<p style={{ color: "white", fontSize: "18px", marginBottom: "15px" }}>
					But, If We Use The [Normal Increament] After The [Bad Async Increament] Its Add Number On The Last Number Is Stored In
					The Memory
				</p>
				My Counter Is: <span className="second-color">{counter}</span> <br />
				<button className="mybtn" id="normal-increament" onClick={handleChange}>
					Normal Increament
				</button>
				<br />
				<button className="mybtn" id="good-increament" onClick={handleChange}>
					Good Async Increament
				</button>
				<button className="mybtn" id="bad-increament" onClick={handleChange}>
					Bad Async Increament
				</button>
				<hr />
			</h3>
			<h3 className="main-color">
				The Country States Are:{" "}
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
				<input type="text" id="username" placeholder="Enter Your UserName" onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="email" className="main-color pointer">
					Email:
				</label>
				<br />
				<input type="text" id="email" placeholder="Enter Your Email..." onChange={handleChange} />
			</div>
		</div>
	);
}
