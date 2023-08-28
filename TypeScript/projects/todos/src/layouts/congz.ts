import confetti from "canvas-confetti";

export const congrats = () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;

	const create = confetti.create(canvas, { resize: true, useWorker: true });

	create({ particleCount: 200, spread: 200 });
};
