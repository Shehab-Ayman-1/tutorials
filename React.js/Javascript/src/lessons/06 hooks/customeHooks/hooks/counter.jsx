import { useState } from "react";

export function useCount() {
	const [count, setCount] = useState(0);

	let handleIncreament = () => {
		setCount((count) => count + 1);
	};

	let handleDecreament = () => {
		setCount((count) => count - 1);
	};

	return { count, handleIncreament, handleDecreament };
}
