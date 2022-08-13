import React, { useState } from "react";

export function Conditions() {
	const [age] = useState(21);

	let compare = () => {
		if (age <= 18) return `Sorry, But You Are Smaller Than 18 Years Old`;
		return `Your Age Is: ${age}`;
	};

	return (
		<div className="f-20">
			<h3>{age >= 18 ? `My Age Is: ${age}` : <p>Sorry, But You Are Smaller Then 18 Years</p>} </h3>
			<br />
			<h3>{compare()} </h3>
		</div>
	);
}
