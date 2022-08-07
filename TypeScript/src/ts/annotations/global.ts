export default function Globals() {
	// Global Variablts
	let st: string = "Shehab";
	let num: number = 21;
	let bool: boolean = true;
	let stnum: string | number = "My Age Is: " + 21;
	let any: any = `name: shehab, age: ${21}, isHired: ${true}`;

	console.log(st, num, bool, stnum, any);
}
