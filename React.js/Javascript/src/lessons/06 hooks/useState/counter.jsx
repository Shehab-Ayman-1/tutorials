import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleChange = (event) => {
		if (event.target.name === "direct") setTimeout(() => setCount(count + 1), 1000);
		if (event.target.name === "function") setTimeout(() => setCount((count) => count + 1), 1000);
	};

	return (
		<div className="">
			<h3>Count: {count}</h3>
			<button className="mybtn" name="direct" onClick={handleChange}>
				Direct Increament
			</button>
			<button className="mybtn" name="function" onClick={handleChange}>
				Function Increament
			</button>
		</div>
	);
};
