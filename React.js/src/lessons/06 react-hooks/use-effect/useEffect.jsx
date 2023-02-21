import React, { useEffect, useState } from "react";

export function UseEffect() {
	const [data, setData] = useState({ name: "", age: "" });
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Function Component Did Mount");
	}, []);

	useEffect(() => {
		console.log("Function Component Did Update");
	});

	useEffect(() => {
		console.log("Function Component Did Update The Name");
	}, [data.name]);

	useEffect(() => {
		const interval = setInterval(() => {
			// setCount(count + 1); // [1] Each Time Update Zero To One
			// setCount((count) => count + 1); // [2] Each Time Add 2 Because The Previous Count Value Is Stored In The Memory
			setCount((count) => count + 1); // [3] Each Time Add 1 Because The Previous Count Was Deleted From Return()
		}, 1000);

		return () => {
			console.log("Delete Any Value Is Stored In The Memory, Then Work");
			clearInterval(interval); // [3] Every Thing Work Good
		};
	}, [count]);

	let handleValue = (event) => {
		let name = event.target.name;
		setData({ ...data, [name]: event.target.value });
	};

	return (
		<div className="f-20 main-color">
			<label htmlFor="username">Username</label>
			<br />
			<input type="text" name="name" placeholder="username" onChange={handleValue} />
			<br />
			<label htmlFor="age">age</label>
			<br />
			<input type="text" name="age" placeholder="age" onChange={handleValue} />
			<hr />
			<h3>Count: {count}</h3>
		</div>
	);
}
