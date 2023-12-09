import { useEffect, useState } from "react";
import { GET_USERS, DELETE_USER } from "./utils";

export function DeleteUser() {
	const [data, setData] = useState([]);
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

	let handleDelete = async (id) => {
		const response = await DELETE_USER(id);
		if (response?.message) return alert("Error.");

		const user = data.find((u) => u.id === id);
		setData((d) => d.filter((u) => u !== user));
	};

	if (loading) return <h3 className="main-color f-40">Loading...</h3>;
	if (error) return <h3 className="main-color f-40">Error.</h3>;
	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">The Server Have 10 Users: </h3>
			<div className="users-list">
				{data.length &&
					data.map((user, i) => (
						<p className="user" key={i}>
							<span className="mybtn" onClick={() => handleDelete(user.id)}>
								delete
							</span>
							{i + 1} - {user.name}
						</p>
					))}
			</div>
		</div>
	);
}
