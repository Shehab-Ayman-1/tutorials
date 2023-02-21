import React from "react";
import axios from "axios";
import Link from "next/link";

export const getStaticProps = async () => {
	try {
		let res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
		let data = res.data;
		return { props: { posts: data } } || { props: { posts: { id: 1, title: "No Posts", body: "No Content" } } };
	} catch (error) {
		console.error(error);
	}
};

export default function Blogs({ posts }) {
	const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 };

	return (
		<div className="container">
			<h1 className="fs-1">Blogs Page</h1>
			<div className="blogs" style={{ ...grid }}>
				{posts &&
					posts.map(({ id, title, body }) => {
						return (
							<div className="card mb-4" key={id}>
								<div className="card-body">
									<h5 className="card-title text-primary fw-bold">{title}</h5>
									<p className="card-text text-dark">{body}</p>
									<Link href={`/blogs/${id}`} className="btn btn-primary w-100">
										View Post
									</Link>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
