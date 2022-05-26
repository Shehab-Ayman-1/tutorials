import React from "react";

export default function conditions() {
	const myAge = 22;

	let compare = () => {
		if (myAge >= 18) {
			return `Yor Age Is: ${myAge}`;
		} else {
			return `Sorry, But You Are Smaller Than 18 Years Old`;
		}
	};

	return (
		<div className="f-20">
			<h3>{myAge >= 18 ? "My Age Is: " + myAge : <p>Sorry, But You Are Smaller Then 18 Years</p>} </h3>
			<br />
			<h3>{compare()} </h3>
		</div>
	);
}
