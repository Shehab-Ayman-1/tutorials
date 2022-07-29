export default function isLowerCase(txt) {
	let isLower = true;
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	txt.split("").map((key) => {
		const isFound = letters.find((letter) => letter === key);
		if (!isFound) isLower = false;
	});
	return isLower;
}
