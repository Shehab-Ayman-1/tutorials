export const numbers = () => {
	console.log(1000000); // 1000000
	console.log(1000_000); // 1000000
	console.log(1e6); // 1000000
	console.log(10 ** 6); // 1000000
};

export const numberMethods = () => {
	let intSt = "1500";
	let floatSt = "1500.3333";
	let int = 200;
	let float = 500.55555555555;

	console.log(Number(intSt)); // 1500

	console.log(Number.parseInt(intSt)); // 1500
	console.log(Number.parseFloat(floatSt)); // 1500.3333

	console.log(int.toString()); // "200"
	console.log(float.toFixed(2)); // 500.56

	console.log(Number.isInteger(float)); // false
	console.log(Number.isNaN("Osama" / 2)); // true
};

export const math = () => {
	let int = 200;
	let min = 200.2;
	let max = 200.9;

	console.log(Math.round(min)); // 200
	console.log(Math.round(max)); // 201

	console.log(Math.ceil(min)); // 201
	console.log(Math.ceil(max)); // 201

	console.log(Math.floor(min)); // 200
	console.log(Math.floor(max)); // 200

	console.log(Math.trunc(min)); // 200 - remove the decimal numbers
	console.log(Math.trunc(max)); // 200 - remove the decimal numbers

	console.log(Math.random());
	console.log(Math.random());

	console.log(Math.min(10, 20, 30, 40, 50, 60, -100)); // -100
	console.log(Math.max(10, 20, 30, 40, 50, 60, 100)); // 100

	console.log(Math.pow(2, 3)); // 8
	console.log(Math.pow(4, 2)); // 16
};
