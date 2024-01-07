import { useEffect } from "react";

export const useGenerateColor = () => {
	const letters = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let color = "#";

	const generate = () => {
		color = "#";
		for (let i = 0; i < 6; i++) {
			let random = Math.floor(Math.random() * letters.length);
			color += letters[random];
		}
		return color;
	};

	useEffect(() => {
		generate();
	}, []);

	return { color, generate };
};
