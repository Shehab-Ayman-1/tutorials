import { useEffect } from "react";

export const randColor = () => {
	const letters = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let color = "#";
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * 14);
		color += letters[random];
	}
	return color;
};

export function useRandomBg() {
	useEffect(() => {
		let handleBg = () => (document.body.style.cssText = `background: ${randColor()}`);
		window.addEventListener("mousedown", () => handleBg());
	}, []);
}
