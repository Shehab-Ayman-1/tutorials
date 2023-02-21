import { useState } from "react";

export function UseCount() {
	const [count, setCount] = useState(0);

	let handleIncreament = () => {
		setCount(count + 1);
	};

	let handleDecreament = () => {
		setCount(count - 1);
	};

	return {
		count,
		handleIncreament,
		handleDecreament,
	};
}
