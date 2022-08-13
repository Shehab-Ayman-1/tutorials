// [2] Count The String Characters Length [ length() ]
//   - Check If The Character Is Defined, Then Count OR Not [ empty() ]

export default function Length(txt, symbols = false) {
	let myLength = 0;

	if (typeof txt !== "string") return "Length Is A String Methode";

	txt.split("").forEach((letter) => {
		if (!symbols) return (myLength += 1);

		if (letter !== " " && letter !== "|" && letter !== ",") return (myLength += 1);
	});
	return myLength;
}
