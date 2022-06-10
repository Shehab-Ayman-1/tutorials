import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function Login() {
	const [statue, setStatue] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const Alert = setInterval(() => {
			alert("Please Login To Continue");
			clearInterval(Alert);
		}, 500);
	}, []);

	let handleSubmit = (values) => {
		let user = document.querySelector(".Login .user-statues .username-statue");
		user.textContent = `Welcome : ${values.username}`;
		setStatue(!statue);
	};

	function schema() {
		const schema = Yup.object().shape({
			username: Yup.string().required(),
			email: Yup.string().required(),
			password: Yup.string().required(),
		});
		return schema;
	}

	let login = () => {
		document.querySelector(".Login .user-statues .username-statue").textContent = "";
		setStatue(!statue);
		setUsername("");
		setEmail("");
		setPassword("");
	};

	let createForm = () => {
		if (statue) {
			return (
				<Formik
					enableReinitialize={true}
					initialValues={{ username, email, password }}
					validationSchema={schema}
					onSubmit={handleSubmit}>
					<Form>
						<div className="username">
							<label htmlFor="username">Username: </label> <br />
							<Field
								name="username"
								type="text"
								id="username"
								placeholder="Enter Your Username"
								onChange={(event) => setUsername(event.target.value)}
							/>
							<div className="second-color">
								<ErrorMessage name="username" />
							</div>
						</div>
						<div className="email">
							<label htmlFor="email">Email: </label> <br />
							<Field
								name="email"
								type="email"
								id="email"
								placeholder="Enter Your Email"
								onChange={(event) => setEmail(event.target.value)}
							/>
							<div className="second-color">
								<ErrorMessage name="email" />
							</div>
						</div>
						<div className="password">
							<label htmlFor="password">Password: </label> <br />
							<Field
								name="password"
								type="text"
								id="password"
								placeholder="Enter Your Password"
								onChange={(event) => setPassword(event.target.value)}
							/>
							<div className="second-color">
								<ErrorMessage name="password" />
							</div>
						</div>
						<button type="submit" className="mybtn">
							Login
						</button>
					</Form>
				</Formik>
			);
		} else {
			return (
				<button className="mybtn login-btn" onClick={login}>
					{username && email && password ? "LogOff" : "LogIn"}
				</button>
			);
		}
	};

	return (
		<div className="Login f-20">
			<div className="user-statues">
				<h3 className="username-statue"> </h3>
			</div>
			{createForm()}
		</div>
	);
}
