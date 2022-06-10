import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import addUser from "./orders/add-user";

export default function AddUser() {
	const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "", address: { city: "" } });

	let handleAdd = (values) => {
		addUser(values).then(() => alert("New User Was Added"));
	};

	let createUser = () => {
		let handle = (event) => {
			let name = event.target.name;
			let value = event.target.value;

			if (name === "address.city") {
				setUser({ ...user, address: { city: event.target.value } });
			} else {
				setUser({ ...user, [name]: value });
			}
		};
		return (
			<Form>
				<div className="name">
					<label htmlFor="name"> ☺ Name: </label>
					<Field id="name" name="name" value={user.name} onChange={handle} placeholder="New Name" />
					<div className="second-color">
						<ErrorMessage name="name" />
					</div>
				</div>
				<div className="email">
					<label htmlFor="email"> ☺ email: </label>
					<Field id="email" name="email" value={user.email} onChange={handle} placeholder="New email" />
					<div className="second-color">
						<ErrorMessage name="email" />
					</div>
				</div>
				<div className="phone">
					<label htmlFor="phone"> ☺ phone: </label>
					<Field id="phone" name="phone" value={user.phone} onChange={handle} placeholder="New Phone" />
					<div className="second-color">
						<ErrorMessage name="phone" />
					</div>
				</div>
				<div className="website">
					<label htmlFor="website"> ☺ website: </label>
					<Field id="website" name="website" value={user.website} onChange={handle} placeholder="New website" />
					<div className="second-color">
						<ErrorMessage name="website" />
					</div>
				</div>
				<div className="username">
					<label htmlFor="user"> ☺ username: </label>
					<Field id="user" name="username" value={user.username} onChange={handle} placeholder="username" />
					<div className="second-color">
						<ErrorMessage name="username" />
					</div>
				</div>
				<div className="phone">
					<label htmlFor="city"> ☺ city: </label>
					<Field
						id="city"
						name="address.city"
						value={user.address.city}
						onChange={handle}
						placeholder="New Phone"
					/>
					<div className="second-color">
						<ErrorMessage name="address.city" />
					</div>
				</div>
				<button type="submit" className="mybtn">
					New User
				</button>
			</Form>
		);
	};

	let schema = () => {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			phone: Yup.string().required(),
			website: Yup.string().required(),
		});
		return schema;
	};

	return (
		<div className="ajax-request f-20">
			<Formik enableReinitialize={true} initialValues={user} onSubmit={handleAdd} validationSchema={schema}>
				{createUser}
			</Formik>
		</div>
	);
}
