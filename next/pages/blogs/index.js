import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
	let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
	let data = await res.json();
	return { props: { posts: data } };
};

export default function Blogs({ posts }) {
	const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 };

	return (
		<div className="container">
			<h1 className="fs-1">Blogs Page</h1>
			<div className="blogs" style={{ ...grid }}>
				{posts.map(({ id, title, body }) => {
					let img = `https://source.unsplash.com/720x400/?natural/${id}`;
					return (
						<div className="card mb-4" key={id}>
							<img src={img} className="card-img-top" alt="img" width="100%" height="100%" />
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
