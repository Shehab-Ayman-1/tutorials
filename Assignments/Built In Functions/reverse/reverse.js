import Length from "../length/length.js";

export default function Reverse(txt) {
	let result = "";

	for (let i = Length(txt); i >= 1; i--) result += txt[i - 1];

	return result;
}
