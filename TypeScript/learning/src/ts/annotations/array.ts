export function Arrays() {
	// let stArr: string[] = ["html | ", "css | ", "js | ", 100] // Invalue Array
	let stArr: string[] = ["html", "css", "js", "ts"];
	let numArr: number[] = [1, 2, 3, 4, 5];
	let stNumArr: string[] | number[] = ["string value", "number value"];
	let anyArr = ["name", 21, true, ["Nested Array", ["", "", 2, false]], { obj: "value" }];

	console.log(stArr, numArr, stNumArr, anyArr);

	let loopArr: string[] = ["html | ", "css | ", "js | "];
	loopArr.forEach((item) => console.log(item.repeat(3)));
}
