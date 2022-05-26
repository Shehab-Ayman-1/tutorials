import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getUser from "./orders/get-user";

function UserDetails() {
	const [user, setUser] = useState();
	let { userID } = useParams();
	useEffect(() => {
		getUser(userID).then((result) => setUser(result.data));
	}, []);

	let createUser = () => {
		if (user)
			<>
				<div className="back">
					<Link to="/ajax-request/get-all-users" className="mybtn">
						Go Back
					</Link>
					<br />
					<br />
				</div>
				<div className="main-details">
					<h3 className="main-color">User Details</h3>
					<p>{`ID => ${user.id}`}</p>
					<p>{`Name => ${user.name}`}</p>
					<p>{`Email => ${user.email}`}</p>
					<p>{`Phone => ${user.phone}`}</p>
					<p>{`username => ${user.username}`}</p>
					<p>{`website => ${user.website}`}</p>
				</div>
				<div className="address-details">
					<h3 className="main-color">Address Details</h3>
					<p>{"city" + " => " + user.address.city}</p>
					<p>{"street" + " => " + user.address.street}</p>
					<p>{"suite" + " => " + user.address.suite}</p>
					<p>{"zipcode" + " => " + user.address.zipcode}</p>
				</div>
				<div className="compony-details">
					<h3 className="main-color">Compony Details</h3>
					<p>{"name" + " => " + user.company.name}</p>
					<p>{"bs" + " => " + user.company.bs}</p>
					<p>{"catchPhrase" + " => " + user.company.catchPhrase}</p>
				</div>
			</>;
	};

	return (
		<div className="ajax-request f-20">
			<div className="search-user">{createUser()}</div>
		</div>
	);
}

export default UserDetails;
