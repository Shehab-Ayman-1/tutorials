export const Anno_Assign1 = () => {
	function calculate(numOne: number, numTwo: number) {
		return numOne + numTwo;
	}

	console.log(calculate(10, 20)); // 30
	// console.log(calculate("10", "20")); // We Don't Need This To Work => Error
	console.log(calculate(+true, +true)); // 2
};

export const Anno_Assign2 = () => {
	function printInfo(valueOne: string | number, valueTwo: string | number) {
		return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
	}

	console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
	console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
	// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work => error
};

export const Anno_Assign3 = () => {
	let arr: (number | boolean[] | (string | (string | number)[])[])[] = [];
	arr.push(21, [true, false], ["shehab", ["hesham", 21]]);
};

export const Anno_Assign4 = () => {
	/* 
        Assignment
        -- Edit The tsconfig.json To Ignore The Paramater Annotation
        -- Edit The tsconfig.json To Warning Us When Using Unused Variables
        -- Edit The tsconfig.json To Warning Us When Using Unused Paramenters
        -- Edit The tsconfig.json To Warning Us When Using UnreachableCode
    */
	function reportErrors(username, age: number) {
		// let rank = "Professor"; // Unused
		return `Username: ${username}, age: ${age}`;
		// console.log("We Will Not Reach Here"); // Unused
	}

	console.log(reportErrors("Elzero", 40));
};

export const Anno_Assign5 = () => {
	let nothing;
	let theName: string = "Elzero";
	function showMyDetails(a = "", b = "", c) {
		return `${a} ${b} ${c}`;
	}

	// Replace ???? With The Available Variables As Argument To Get The Result
	console.log(showMyDetails(theName, nothing, (nothing = ""))); // Elzero
};

export const Anno_Assign6 = () => {
	function showMsg(user?: string, age?: string | number, country?: string) {
		return `${user} ${age} ${country}`;
	}

	console.log(showMsg());
	console.log(showMsg("Elzero"));
	console.log(showMsg("Elzero", 40));
	console.log(showMsg("Elzero", "40", "Egypt"));
};

export const Anno_Assign7 = () => {
	// Write The Function Here
	const printInConsole = (...inputs: any[]): string => {
		let arr: any[] = [];
		inputs.forEach((item) => arr.push(`The Value Is ${item}, And The Type Is ${typeof item}`));
		console.table({ ...arr });
		return "Done";
	};

	// Using The Function => Do Not Edit
	console.log(printInConsole("A", "B", "C"));
	console.log(printInConsole(1, 2, 3, 4, 5));
	console.log(printInConsole(true, false, false, true, true));
	console.log(printInConsole("A", 1, true, "B", 2, false));
};
