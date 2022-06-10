import React, { useEffect, useState } from "react";
import getUsers from "./orders/get-all-request";
import deleteUser from "./orders/delete-user";

export default function AjaxRequest() {
	const [data, setData] = useState();
	useEffect(() => {
		getUsers().then((item) => setData(item.data));
	}, []);

	let Delete = (user) => {
		// delete user from Server
		deleteUser(user.id).then(() => {
			// delete user from DOM
			let newData = data;
			let userIndex = newData.indexOf(user);
			newData.splice(userIndex, 1);
			setData(newData);
			document.querySelectorAll(".ajax-request .users-list .user")[userIndex].remove();
		});
	};

	let usersList = () => {
		if (data !== undefined) {
			return data.map((user) => (
				<p className="user" key={user.id}>
					<span className="mybtn" onClick={() => Delete(user)}>
						delete
					</span>
					{user.id + " => " + user.name}
				</p>
			));
		}
	};

	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">The Server Have 10 Users: </h3>
			<div className="users-list">{data !== undefined ? usersList() : null}</div>
		</div>
	);
}
