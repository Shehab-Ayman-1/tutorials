import React, { useEffect, useState } from "react";
import { GetUsersRequest, DeleteRequest } from "./orders";

export function DeleteUser() {
	const [data, setData] = useState();

	useEffect(() => {
		GetUsersRequest().then((item) => setData(item.data));
	}, []);

	let Delete = (user) => {
		// delete user from Server
		DeleteRequest(user.id).then(() => {
			// delete user from DOM
			let newData = data;
			let userIndex = newData.indexOf(user);
			newData.splice(userIndex, 1);
			setData(newData);
			document.querySelectorAll(".ajax-request .users-list .user")[userIndex].remove();
		});
	};

	let usersList = () => {
		if (!data) return <span>Looding...</span>;

		return data.map((user) => (
			<p className="user" key={user.id}>
				<span className="mybtn" onClick={() => Delete(user)}>
					delete
				</span>
				{user.id + " => " + user.name}
			</p>
		));
	};

	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">The Server Have 10 Users: </h3>
			<div className="users-list">{data && usersList()}</div>
		</div>
	);
}
