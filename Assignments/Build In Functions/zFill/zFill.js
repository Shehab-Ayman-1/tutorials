import Length from "../length/length.js";

export default function zFill(txt, width, char) {
	// [1] Chack If The Width Is A Number
	if (typeof width !== "number") return "Width Has To Be A Number";

	// [2] Count The Empty Spacing
	const spaces = +width - Length(txt);

	// [3] Fill The Empty Spaces With The Character
	let result = "";
	for (let i = 0; i < spaces; i++) result += String(char);

	// [4] Add Txt After The Spacing
	return result + txt;
}
