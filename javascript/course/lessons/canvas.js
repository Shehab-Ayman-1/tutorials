let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let w = canvas.width;
let h = canvas.height;

export const fillStyle = () => {
	context.fillStyle = "orange"; // color - gradient - pattern
	context.fillRect(25, 25, 250, 150);
};

export const strokeStyle = () => {
	const gradient = context.createLinearGradient(0, 0, 200, 200);

	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "orange");

	context.lineWidth = 10;
	context.strokeStyle = gradient; // color - gradient - pattern
	context.strokeRect(50, 50, w - 100, h - 100);
};

export const gradient = () => {
	let gradient = context.createLinearGradient(0, 0, 200, 200);
	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "orange");

	context.fillStyle = gradient;
	context.fillRect(0, 0, w, h);
};

export const Pattern = () => {
	// Create a pattern, offscreen
	const patternCanvas = document.createElement("canvas");
	const patternContext = patternCanvas.getContext("2d");

	// Give the pattern a width and height of 50
	patternCanvas.width = 50;
	patternCanvas.height = 50;

	// Give the pattern a background color and draw an arc
	patternContext.fillStyle = "#fec";
	patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
	patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
	patternContext.stroke();

	// Create our primary canvas and fill it with the pattern
	const pattern = context.createPattern(patternCanvas, "repeat");
	context.fillStyle = pattern;
	context.fillRect(0, 0, w, h);
};

export const text = () => {
	/* text:
		- globalAlpha -> Set The Global Canvas Opacity
		- font -> Set The Font Size & Family
		- lineWidth -> Set The Font Stroke
		- fillText  -> Set The Font (Text, X, Y)
		- textAlign -> Set The Text Align
	 */

	context.globalAlpha = 0.5;

	context.font = "45px Tahoma";
	context.lineWidth = 1;

	// context.fillStyle = "orange";
	// context.fillText("Hello Canvas", 25, 150);

	context.strokeStyle = "orange";
	context.textAlign = "center";
	context.strokeText("Canvas", 150, 100);
};

export const chart = () => {
	let colors = ["#e74c3c", "#e67e22", "#f1c40f", "#1abc9c", "#9b59b6", "#3498db"];

	context.font = "12px Tahoma";
	for (let i = 0; i < 6; i++) {
		let x = w / 6 + i * 50 - 43;
		let y = 20 + i * 30;
		let he = h - y;

		context.fillStyle = colors[i];
		context.fillRect(x, y, 35, he - 20);

		context.fillStyle = `white`;
		context.fillText(i + 1, x + 25 / 2, h - 5);
	}
};

export const paths_lines = () => {
	/* paths:
		- beginPath -> Create New Paths
		- moveTo    -> The Start Point Of The Path Line
		- lineTo    -> The End Point Of The Path Line
		- closePath -> Create The Close/Last Line
		- stroke    -> Draw The Line
	*/
	context.beginPath();

	context.moveTo(10, 10);

	context.lineTo(w / 2 - 5, h / 2); // (145, 100)
	context.lineTo(w / 2 - 5, h - 10); // (145, 190)
	context.lineTo(w / 2 + 5, h - 10); // (155, 190)
	context.lineTo(w / 2 + 5, h / 2); // (155, 100)
	context.lineTo(w - 10, 10); // (290, 10)

	context.closePath(); // (10, 10)

	context.strokeStyle = "orange";
	context.stroke();

	context.fillStyle = "darkred";
	context.fill();
};

export const circle = () => {
	// arc(center-X, center-Y, radius, elipse-start, elipse-end, rotation?):
	let pi = Math.PI;
	let ratio = Math.round(Math.random() * 100) || 75;

	context.font = "22px Tahoma";
	context.lineWidth = "2";
	context.strokeStyle = "orange";

	context.arc(150, 100, 100, 0, ((ratio * 2) / 100) * pi);

	context.strokeText(`${ratio}%`, 130, 110);
	context.stroke();
};

export const shadow = () => {
	context.shadowColor = "white";
	context.shadowBlur = 10;
	context.shadowOffsetX = 10;
	context.shadowOffsetY = -10;

	context.fillStyle = "orange";
	context.fillRect(50, 50, 200, 100);
};

export const transform = () => {
	// Lesson No 11
};

export const save_restore = () => {
	// Lesson No 11
};

export const smileface = () => {
	// Canvas Style
	context.strokeStyle = "orange";
	context.fillStyle = "#111";
	context.fillRect(0, 0, w, h);

	// Face Circle
	context.beginPath();
	context.arc(150, 100, 50, 0, 360);
	context.stroke();

	// Left Eye
	context.beginPath();
	context.arc(130, 80, 10, 0, 360);
	context.stroke();

	// Right Eye
	context.beginPath();
	context.arc(170, 80, 10, 0, 360);
	context.stroke();

	// Face Mouth
	context.beginPath();
	context.arc(150, 100, 30, 0.6, 0.75 * Math.PI);
	context.stroke();
};
