import { useImperativeHandle, useState } from "react";

export const Counter = ({ counterRef }) => {
	const [count, setCount] = useState(0);

	const increament = () => {
		setCount(count + 1);
	};

	const decreament = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	useImperativeHandle(counterRef, () => ({ reset }));

	return (
		<div>
			<p>Counter: {count}</p>
			<button className="mybtn" onClick={increament}>
				Increament
			</button>
			<button className="mybtn" onClick={decreament}>
				Decreament
			</button>
		</div>
	);
};
