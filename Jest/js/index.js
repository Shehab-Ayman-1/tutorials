const arr = [1, 2, 3, 4, 5, 6];
const sayHello = (message) => (typeof message === "string" ? "Name Is: shehab" : typeof message === "number" ? "Age Is: 21" : "Hello Jest");

const sum = (num1, num2, num3 = null) => (num1 || 0) + (num2 || null) + num3;
const iterableSum = (...nums) => nums.reduce((prev, cur) => prev + cur, 0);

const inputValidate = (name) => {
	if (!name) return "unknown";
	else if (name.startsWith(" ") || name.endsWith(" ")) return name.trim();
	else if (name.length > 15) return `${name.slice(0, 10)}...`;
	else if (/[\W_]/gi.test(name)) return name?.replace(/[\W_]/gi, "").toLowerCase();
	else return name;
};

module.exports = { arr, sayHello, sum, iterableSum, inputValidate };
