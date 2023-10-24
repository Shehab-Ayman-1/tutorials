import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_USERS } from "./utils";
import "./style.scss";

export function GetUsers() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			setLoading(true);
			const response = await GET_USERS();
			if (response.message) setError(true);
			else setData(response);
			setLoading(false);
		})();
	}, []);

	let handleNavigate = async ({ target: { id } }) => {
		if (!data.length) return;
		navigate(`../get-user/${id}`);
	};

	if (loading) return <h3 className="main-color f-40">Loading...</h3>;
	if (error) return <h3 className="main-color f-40">Error.</h3>;
	return (
		<div className="ajax-request f-20">
			<h3 className="main-color">All Users: </h3>
			<div className="users-list f-20">
				{data?.map((user, i) => (
					<div className="user" key={user.id}>
						<p>{`${i + 1 > 9 ? i + 1 : `0${i + 1}`} - ${user.name}`}</p>
						<button className="mybtn" id={user.id} onClick={handleNavigate}>
							view
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
