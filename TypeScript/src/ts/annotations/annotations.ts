const annotations = () => {
	/* Variablts */
	let st: string = "Shehab";
	let num: number = 21;
	let bool: boolean = true;
	let cus: string | number = "My Age Is: " + 21;
	let any: any = "shehab" + 20 + true;
	let stArr: string[] = ["html", "css", "js", "ts"];
	let numArr: number[] = [1, 2, 3, 4, 5];
	let stNumArr: string[] | number[] = ["string value", "number value"];
	let anyArr = ["name", 21, true, ["Nested Array", ["", "", 2, false]], { obj: "value" }];

	// Can't Loop On Now Available Type
	let loopArr: string[] = ["html | ", "css | ", "js | "]; // Invalude Array ["html | ", "css | ", "js | ", 100]
	for (let val of loopArr) {
		console.log(val.repeat(3));
	}
};

export default annotations;
