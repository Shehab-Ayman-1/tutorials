export const multipleValues = () => {
	let i = 1;

	// Each Time Using a Variable Increase The i Variable 1
	Object.defineProperty(window, "a", { get: () => i++ });

	// now a = 1 then make a = 2
	if (a == 1 && a == 2) {
		console.log("a == 1 && a == 2 | " + "true");
	}

	// now a = 3 then 4 then 5, Because We Using a Variable Two Time Above
	if (a == 3 && a == 4 && a == 5) {
		console.log("a == 3 && a == 4 && a == 5 | " + "true");
	}

	// now a = 6
	if (a != 5) {
		console.log("a == 6 " + "false" + " | a =  " + a); // now a = 7
	}

	// now a = 8 then 9
	if (a && a != 8) {
		console.log("a == 8 && a == 9 | " + "false" + " | a =  " + a); // now a = 10 ☺
	}
};
