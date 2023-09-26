export function MultipleType() {
	const GenType = <genOne, genTwo>(val1: genOne, val2: genTwo): string => {
		return `The First Value Is ${val1}, And The Second Value Is ${val2}`;
	};

	console.log(GenType("shehab", 150)); // GenType: <string, number>(val1: string, val2: number) => string
	console.log(GenType<string, number>("shehab", 150));
	console.log(GenType<string, boolean>("shehab", false));
}
