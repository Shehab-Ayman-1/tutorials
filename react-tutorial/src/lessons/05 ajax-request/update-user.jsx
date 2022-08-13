import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { GetUsersRequest, UpdateRequest } from "./orders";

export function UpdateUser() {
	const [data, setData] = useState();
	const [user, setUser] = useState();

	useEffect(() => {
		GetUsersRequest().then((item) => setData(item.data));
	}, []);

	let update = (user) => UpdateRequest(user.id, user).then(() => alert("The User Was Updated"));

	let renderUsers = () => {
		if (!data) return <span>Looding...</span>;

		return data.map((user, index) => (
			<p className="user" key={user.id}>
				<button className="mybtn" onClick={() => setUser(user)}>
					update
				</button>
				{index + " => " + user.name}
			</p>
		));
	};

	let createFields = () => {
		let handleName = (event) => setUser({ ...user, name: event.target.value });

		let handleEmail = (event) => setUser({ ...user, email: event.target.value });

		return (
			<Form>
				<br />
				<h3 className="main-color">Update User</h3>
				<div className="name">
					<label htmlFor="name">Name: </label>
					<Field name="name" value={user.name} onChange={handleName} placeholder="New Name..." />
					<div className="second-color">
						<ErrorMessage name="name" />
					</div>
				</div>
				<div className="email">
					<label htmlFor="email">Email: </label>
					<Field type="text" value={user.email} onChange={handleEmail} placeholder="New email..." />
					<div className="second-color">
						<ErrorMessage name="email" />
					</div>
				</div>
				<button type="submit" className="mybtn">
					Submit
				</button>
			</Form>
		);
	};

	let schema = () => {
		const schema = Yup.object().shape({
			name: Yup.string().required("The New Name: Is A Required Field !"),
			email: Yup.string().email().required("The New Email: Is A Required Field !"),
		});
		return schema;
	};

	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">The Server Have 10 Users: </h3>
			<div className="users-list">{renderUsers()}</div>

			<Formik enableReinitialize={true} initialValues={user} validationSchema={schema} onSubmit={update}>
				{user ? createFields() : <span className="main-color">Please, Select The User To Update Him</span>}
			</Formik>
		</div>
	);
}
