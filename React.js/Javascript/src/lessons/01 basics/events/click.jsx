import { useState } from "react";

export function Click() {
	const [count, setCount] = useState(0);

	// Get The Count From The State Above
	const increament = () => setCount(count + 1);

	// Get The State From The Memory Of The Browser => Its Helpfull With Asyncronous Methods
	const decreament = () => setCount((myCount) => (myCount > 0 ? myCount - 1 : myCount));

	// Return The State To The Default Value
	const reset = () => setCount(0);

	return (
		<div>
			<h3>My Counter: {count}</h3>
			<button className="mybtn" onClick={increament}>
				Increament
			</button>
			<button className="mybtn" onClick={decreament}>
				Decreament
			</button>
			<button className="mybtn" onClick={reset}>
				Reset
			</button>
		</div>
	);
}
