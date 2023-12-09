import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_USER } from "./utils";

export function GetUser() {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { userId } = useParams();

	useEffect(() => {
		(async () => {
			setLoading(true);
			const response = await GET_USER(userId);
			if (response?.message) setError(true);
			else setUser(response);
			setLoading(false);
		})();
	}, [userId]);

	if (loading) return <h3 className="main-color f-40">Loading...</h3>;
	if (error) return <h3 className="main-color f-40">Error.</h3>;
	return (
		<div className="ajax-request f-20">
			<div className="search-user">
				<div className="back">
					<Link to="../get-users" className="mybtn">
						Go Back
					</Link>
					<br />
					<br />
				</div>
				<div className="main-details" style={{ marginBottom: 20 }}>
					<h3 className="main-color">User Details</h3>
					<p>ID - {user.id}</p>
					<p>Name - {user.name}</p>
					<p>Email - {user.email}</p>
					<p>Phone - {user.phone}</p>
					<p>username - {user.username}</p>
					<p>website - {user.website}</p>
				</div>
				<div className="address-details" style={{ marginBottom: 20 }}>
					<h3 className="main-color">Address Details</h3>
					<p>city - {user.address.city}</p>
					<p>street - {user.address.street}</p>
					<p>suite - {user.address.suite}</p>
					<p>zipcode - {user.address.zipcode}</p>
				</div>
				<div className="compony-details" style={{ marginBottom: 20 }}>
					<h3 className="main-color">Compony Details</h3>
					<p>city - {user.address.city}</p>
					<p>street - {user.address.street}</p>
					<p>suite - {user.address.suite}</p>
				</div>
			</div>
		</div>
	);
}
