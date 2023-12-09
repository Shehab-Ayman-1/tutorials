import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { GET_USERS, UPDATE_USER } from "./utils";
import * as Yup from "yup";

export function UpdateUser() {
	const [data, setData] = useState();
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const response = await GET_USERS();
			if (response?.message) setError(true);
			else setData(response);
			setLoading(false);
		})();
	}, []);

	let handleUpdate = async (body) => {
		const updated = await UPDATE_USER(body.id, body);
		if (updated?.message) alert(updated.message);

		const userIndex = data.findIndex((user) => user.id === body.id);
		setData((data) => {
			data.splice(userIndex, 1, body);
			return data;
		});
	};

	let handleName = (event) => {
		setUser({ ...user, name: event.target.value });
	};

	let handleEmail = (event) => {
		setUser({ ...user, email: event.target.value });
	};

	let schema = Yup.object().shape({
		name: Yup.string().required("The New Name: Is A Required Field !"),
		email: Yup.string().email().required("The New Email: Is A Required Field !"),
	});

	if (loading) return <h3 className="main-color f-40">Loading...</h3>;
	if (error) return <h3 className="main-color f-40">Error.</h3>;
	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">The Server Have 10 Users: </h3>
			<div className="users-list">
				{data.map((user, index) => (
					<p className="user" key={user.id}>
						<button className="mybtn" onClick={() => setUser(user)}>
							update
						</button>
						{index} - {user.name}
					</p>
				))}
			</div>

			<Formik initialValues={user} enableReinitialize={true} validationSchema={schema} onSubmit={handleUpdate}>
				{!user ? (
					<span className="main-color">Please, Select The User To Update Him</span>
				) : (
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
				)}
			</Formik>
		</div>
	);
}
