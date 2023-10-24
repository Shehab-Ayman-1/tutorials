import { useState } from "react";

export function Click() {
	const [count, setCount] = useState(0);

	// Get The Count From The State Above
	const handleIncreament = () => setCount(count + 1);

	// Get The State From The Memory Of The Browser => Its Helpfull With Asyncronous Methods
	const handleDecreament = () => setCount((count) => (count > 0 ? count - 1 : count));

	// Return The State To The Default Value
	const handleReset = (value) => setCount(value);

	return (
		<div>
			<h3>My Counter: {count}</h3>
			<button className="mybtn" onClick={handleIncreament}>
				Increament
			</button>
			<button className="mybtn" onClick={handleDecreament}>
				Decreament
			</button>
			<button className="mybtn" onClick={() => handleReset(5)}>
				Reset
			</button>
		</div>
	);
}
