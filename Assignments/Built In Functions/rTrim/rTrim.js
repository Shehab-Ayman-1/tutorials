import Length from "../length/length.js";
import Reverse from "../reverse/reverse.js";

export default function RightTrim(char, symbol = " ") {
	let result = "";

	for (let i = 0; i <= Length(char); i++) {
		if ((char[Length(char) - i] && char[Length(char) - i] !== symbol) || Length(result) > 0) {
			result += char[Length(char) - i];
		}
	}

	return Reverse(result);
}
