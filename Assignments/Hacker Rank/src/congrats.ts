import confetti from "canvas-confetti";

export const congrats = () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const config = confetti.create(canvas, { resize: true, useWorker: true });

	config({ particleCount: 200, spread: 200 });
};
