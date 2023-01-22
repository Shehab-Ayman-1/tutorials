export const finding = () => {
	let word = "   Ahmed A   ";

	console.table({
		string: word, // "   Ahmed   "
		Access_With_Index1: word[3], // "A"
		Access_With_Index2: word[15], // Undefined

		length: word.length, // 11
		repeat: word.repeat(2), //  "Elzero Web School Elzero Web School"

		charAt1: word.charAt(3), // "A"
		charAt2: word.charAt(15), // ""

		indexOf: word.indexOf("z"), // 2, Begin Search From Start [value, start]
		lastIndexOf: word.lastIndexOf("h"), // 13, Begin Search From End [value, start]

		toUpperCase: word.toUpperCase(), // "   AHMED   "
		toLowerCase: word.toLowerCase(), // "   ahmed   "
	});
};

export const cutting = () => {
	let word = "Elzero Web School";

	console.table({
		slice1: word.slice(7, 10), // "Ahmed"
		slice2: word.slice(-6, -3), // "Sch"

		substr: word.substr(7, 3), // "Web"

		split1: word.split("").join(), // ["E", "L", "z", "e", "r", "o", .......]
		split2: word.split("", 2).join(), // ["E", "l"]

		trim: word.trim(), // "Ahmed"
		trimStart: word.trimStart(), // "Ahmed   "
		trimEnd: word.trimEnd(), // "   Ahmed"
	});
};

export const checkers = () => {
	let word = "Elzero Web School";

	console.table({
		includes1: word.includes("Web"), // true
		includes2: word.includes("zero", 3), // false

		startWith1: word.startsWith("Web"), // false
		startWith2: word.startsWith("Web", 7), // true

		endWith1: word.endsWith("Elzero"), // false
		endWith2: word.endsWith("School"), // true
	});
};
