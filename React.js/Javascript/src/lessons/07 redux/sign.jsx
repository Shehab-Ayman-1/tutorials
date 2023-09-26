import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "./slices";

const formState = { username: "", email: "", password: "" };
export function ReduxSign() {
	const [formData, setFormData] = useState(formState);
	const { username, email, password, state } = useSelector((state) => state.sign);
	const dispatch = useDispatch();

	let handleLogin = (event) => {
		event.preventDefault();
		dispatch(LOGIN(formData));
	};

	let handleLogOff = (event) => {
		event.preventDefault();
		dispatch(LOGOUT());
		setFormData(() => formState);
	};

	let handleChange = ({ target: { name, value } }) => {
		setFormData((f) => ({ ...f, [name]: value }));
	};

	if (!state) return <GetForm formData={formData} handleLogin={handleLogin} handleChange={handleChange} />;
	return (
		<div className="redux-signin f-20">
			<div className="info">
				<h3 className="main-color">Username: </h3>
				<p>{username || "Not Defined"}</p>
				<h3 className="main-color">Email: </h3>
				<p>{email || "Not Defined"}</p>
				<h3 className="main-color">Password: </h3>
				<p>{password || "Not Defined"}</p>
			</div>

			<div className="btns">
				<button className="mybtn" onClick={handleLogOff}>
					Log Off
				</button>
			</div>
		</div>
	);
}

function GetForm({ formData, handleLogin, handleChange }) {
	return (
		<form className="f-20" style={{ fontWeight: "bold" }} onSubmit={handleLogin}>
			<div className="username">
				<label className="second-color" htmlFor="username">
					Username:
				</label>
				<br />
				<input id="text" type="text" name="username" value={formData.username} placeholder="Username..." onChange={handleChange} required />
			</div>
			<div className="email">
				<label className="second-color" htmlFor="email">
					Email:
				</label>
				<br />
				<input id="email" type="email" name="email" value={formData.email} placeholder="Email..." onChange={handleChange} required />
			</div>
			<div className="password">
				<label className="second-color" htmlFor="password">
					Password:
				</label>
				<br />
				<input id="password" type="password" name="password" value={formData.password} placeholder="Password..." onChange={handleChange} required />
			</div>
			<div className="btns">
				<button type="submit" className="mybtn">
					Log In
				</button>
			</div>
		</form>
	);
}
