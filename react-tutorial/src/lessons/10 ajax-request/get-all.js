import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUsers from "./orders/get-all-request";

export default function AjaxRequest() {
	const [data, setData] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		getUsers().then((item) => setData(item.data));
	}, []);

	let usersList = () => {
		if (data !== undefined) {
			return data.map((user) => (
				<div className="user" key={user.id}>
					<p id={user.id}>{`${user.id} => ${user.name}`}</p>
					<button className="mybtn" onClick={findUser}>
						view
					</button>
				</div>
			));
		}
	};

	let findUser = async (event) => {
		if (data !== undefined) {
			const ID = event.target.previousElementSibling.id - 1;
			navigate(`/ajax-request/user/${data[ID].id}`);
		}
	};

	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">All Users: </h3>
			<div className="users-list f-20">{usersList()}</div>
		</div>
	);
}
