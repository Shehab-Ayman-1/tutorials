export const typeOf = () => {
	let str = "name";
	let num = 21;
	let arr = [""];
	let bool = true;
	let obj = {};
	let nul = null;
	let undf = undefined;

	console.log(typeof str); // string
	console.log(typeof num); // number
	console.log(typeof arr); // object
	console.log(typeof bool); // boolean
	console.log(typeof obj); // object
	console.log(typeof undf); // undefined
	console.log(typeof nul); // object
};

export const unary = () => {
	// Postive Unary Sign: it's convert the string type to number type
	console.log("Postive Numbers");
	console.table({
		unary: [+"100", +"-100"],
		method: [Number("100"), Number.parseFloat("15.15")],
		bool: [+true, +false],
	});

	// Negative Unary Sign
	console.log("Negative Numbers");
	console.table({
		unary: [-"100", -"-100"],
		method: [-Number("100"), -Number.parseFloat("15.15")],
		bool: [-true, -false],
	});
};

export const alert = () => {
	window.alert("Welcome To The Javascript Toturial.");
};

export const write = () => {
	document.write("Use Write Method.");
};

export const consolee = () => {
	console.log("%cLog Message", "color: red");
	console.log("%cLog %cMessage", "color: crimson", "color: green; font-size: 21px");

	console.warn("Warning Message");
	console.error("Error Message");

	console.table(["Shehab", "Hesham", "Aya"]);
	console.table({ name: "shehab", age: 21, isAvailable: true });
};
