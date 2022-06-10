import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import getUsers from "./orders/get-all-request";
import updateUser from "./orders/update-user";

export default function AjaxRequest() {
	const [data, setData] = useState();
	const [user, setUser] = useState();
	useEffect(() => {
		getUsers().then((item) => setData(item.data));
	}, []);

	let usersList = () => {
		if (data !== undefined) {
			return data.map((user, index) => (
				<p className="user" key={user.id}>
					<button className="mybtn" onClick={() => setUser(user)}>
						update
					</button>
					{index + " => " + user.name}
				</p>
			));
		}
	};

	let createFields = () => {
		let handleName = (event) => {
			return setUser({ ...user, name: event.target.value });
		};
		let handleEmail = (event) => {
			return setUser({ ...user, email: event.target.value });
		};
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

	let update = (user) => {
		updateUser(user.id, user).then(() => alert("The User Was Updated"));
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
			<div className="users-list">{usersList()}</div>

			<Formik enableReinitialize={true} initialValues={user} validationSchema={schema} onSubmit={update}>
				{user !== undefined ? createFields() : null}
			</Formik>
		</div>
	);
}
