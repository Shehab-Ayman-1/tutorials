import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, LogOff } from "../redux-helper/new-redux/signin-slice";

export default function Signin() {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const states = useSelector((state) => state.mySignin);

	let handleLogin = (event) => {
		event.preventDefault();
		dispatch(Login({ username, email, password }));
	};

	let handleLogOff = (event) => {
		event.preventDefault();
		dispatch(LogOff());
		setUserName(null);
		setEmail(null);
		setPassword(null);
	};

	let handleUsername = (event) => {
		setUserName(event.target.value);
	};

	let handleEmail = (event) => {
		setEmail(event.target.value);
	};

	let handlePassword = (event) => {
		setPassword(event.target.value);
	};

	let getDetails = () => {
		return (
			<>
				<h3 className="main-color">Username: </h3>
				<p>{states.myUsername ? states.myUsername : "Not Defined"}</p>
				<h3 className="main-color">Email: </h3>
				<p>{states.myEmail ? states.myEmail : "Not Defined"}</p>
				<h3 className="main-color">Password: </h3>
				<p>{states.myPassword ? states.myPassword : "Not Defined"}</p>
			</>
		);
	};

	let getForm = () => {
		return (
			<>
				<div className="username">
					<label className="second-color" htmlFor="username">
						Username:
					</label>
					<br />
					<input
						id="text"
						type="username"
						value={username ? username : ""}
						placeholder="Your Username"
						onChange={handleUsername}
						required
					/>
				</div>
				<div className="email">
					<label className="second-color" htmlFor="email">
						Email:
					</label>
					<br />
					<input
						id="email"
						type="email"
						value={email ? email : ""}
						placeholder="Enter Your Email"
						onChange={handleEmail}
						required
					/>
				</div>
				<div className="password">
					<label className="second-color" htmlFor="password">
						Password:
					</label>
					<br />
					<input
						id="password"
						type="password"
						value={password ? password : ""}
						placeholder="Enter Your Password"
						onChange={handlePassword}
					/>
				</div>
			</>
		);
	};

	return (
		<form className="redux-signin f-20">
			{states.myState ? getDetails() : getForm()}
			<div className="btns">
				{states.myState ? (
					<button type="submit" className="mybtn" onClick={handleLogOff}>
						Log Off
					</button>
				) : (
					<button type="submit" className="mybtn" onClick={handleLogin}>
						Log In
					</button>
				)}
			</div>
		</form>
	);
}
