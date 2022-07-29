import Length from "../length/length.js";

export default function LeftTrim(char, symbol = " ") {
	let result = "";
	char.split("").map((letter) => {
		if (letter !== symbol || Length(result) > 0) result += letter;
	});
	return result;
}
