import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ThunkComponent() {
	const { thunkID } = useParams();
	const card = JSON.parse(localStorage.getItem("data")).find((card) => +card.id === +thunkID);
	console.log(card);

	return (
		<div className="f-20">
			<div className="img" align="center">
				<img src={`https://source.unsplash.com/720x400/?${card.id}`} alt="img-logo" />
			</div>
			<div className="body">
				<h3 className="title main-color">{card.title}</h3>
				<p className="content">{card.body}</p> <br />
				<Link to="../view-posts" className="mybtn">
					View All Posts
				</Link>
			</div>
		</div>
	);
}
