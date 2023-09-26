import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUsersRequest } from "./orders";
import "./style.scss";

export function GetUsers() {
	const [data, setData] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		GetUsersRequest().then((item) => setData(item.data));
	}, []);

	let findUser = async (event) => {
		if (!data) return <span>Looding...</span>;

		const ID = event.target.previousElementSibling.id - 1;
		navigate(`/ajax-request/user/${data[ID].id}`);
	};

	let renderUsers = () => {
		if (!data) return <span>Looding...</span>;

		return data.map((user) => (
			<div className="user" key={user.id}>
				<p id={user.id}>{`${user.id} => ${user.name}`}</p>
				<button className="mybtn" onClick={findUser}>
					view
				</button>
			</div>
		));
	};

	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">All Users: </h3>
			<div className="users-list f-20">{renderUsers()}</div>
		</div>
	);
}
