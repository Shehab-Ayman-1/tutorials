import React, { useEffect, useState } from "react";

export function UseEffect() {
	const [data, setData] = useState({ name: "", age: "" });

	useEffect(() => {
		console.log("Function Component Did Mount");
	}, []);

	useEffect(() => {
		console.log("Function Component Did Update");
	});

	useEffect(() => {
		console.log("Function Component Did Update The Name");
	}, [data.name]);

	let handleValue = (event) => {
		let name = event.target.name;
		setData({ ...data, [name]: event.target.value });
	};

	return (
		<div className="f-20 main-color">
			<h3>useEffect</h3>
			<hr />
			<div>
				<label htmlFor="username">Username</label>
				<br />
				<input type="text" name="name" placeholder="username" onChange={handleValue} />
				<br />
				<label htmlFor="age">age</label>
				<br />
				<input type="text" name="age" placeholder="age" onChange={handleValue} />
			</div>
		</div>
	);
}
