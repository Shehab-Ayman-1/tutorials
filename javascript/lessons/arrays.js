export const control = () => {
	let myFriends = ["Shehab", "Hesham", "Aya", ["Mahmoud", "Fady"]];

	console.log(Array.isArray(myFriends));

	myFriends[3][1] = "Saif";
	console.log(myFriends); // ["Shehab", "Hesham", "Aya", ["Mahmoud", "Saif"]]

	myFriends[myFriends.length - 1] = "Gamal";
	console.log(myFriends); // ["Shehab", "Hesham", "Aya", ["Mahmoud", "Fady"], "Gamal"]

	myFriends.length = 3;
	console.log(myFriends); // ["Shehab", "Hesham", "Aya"]
};

export const adding = () => {
	let myArr = ["shehab", "hesham", "aya"];

	myArr[myArr.length] = "Gamal";
	console.log(myArr); // ["Shehab", "Hesham", "Aya", ["Mahmoud", "Fady"], "Gamal"]

	myArr.unshift("Osama"); // ["Osama", "shehab", "hesham", "aya"]
	console.log(myArr);

	myArr.push("Gamal");
	console.log(myArr); // ["Osama", "shehab", "hesham", "aya", "Gamal"]
};

export const removing = () => {
	let girls = ["salma", "aya", "farha", "rahma"];
	let first = girls.shift();
	let last = girls.pop();

	console.log(girls);
	console.log(first);
	console.log(last);
};

export const search = () => {
	let names = ["salma", "shehab", "hesham", "aya", "salma"];

	console.log(names.indexOf("salma")); // 0
	console.log(names.indexOf("salma", 1)); // 4

	console.log(names.lastIndexOf("salma")); // 4
	console.log(names.lastIndexOf("salma", -2)); // 0

	console.log(names.includes("hesham"));
	console.log(names.includes("hamada"));

	console.log(names.find((val1, val2) => val1 === "aya"));
	console.log(names.findIndex((val1, val2) => val1 === "aya"));
};

export const sorting = () => {
	let array = [10, 400, 20, 100, 500, 200, "rahma", "aya"];
	let names = ["shehab", "hesham", "aya", "salma", "mahmoud"];

	array.sort();
	console.log(array); // [10, 100, 20, 200, 400, 500, 'aya', 'rahma']

	array.sort((a, b) => a - b);
	console.log(array); // [10, 20, 100, 200, 400, 500, 'aya', 'rahma']

	names.sort((a, b) => a.localeCompare(b));
	console.log(names);

	array.reverse();
	console.log(array);
};

export const slicing = () => {
	let names = ["ahmed", "sayed", "ali", "osama", "gamal", "ameer"];

	console.log(names.slice(1, 3)); // ["sayed", "ali"]
	console.log(names.slice(-4, -1)); // ["ali", "osama", "gamal"]

	// names.splice(0, 3);
	// console.log(names);

	names.splice(0, 3, "shehab", "hesham", "aya");
	console.log(names);
};

export const joining = () => {
	let friends = ["hesham", "aya", "rahma", "salma"];
	let newFriends = ["saif", "sherif"];

	let myFriends = friends.concat(newFriends, "farha", ["gamal", "osama"]);
	console.log(myFriends);

	console.log(myFriends.join());

	console.log(myFriends.join(" | "));
};

export const from = () => {
	// from(word, map()) -> Return Seperated Array From The Iterable String

	let iterable = Array.from("Elzero Web School", (letter) => letter + letter).join("");
	console.log(iterable);

	let DoubleNums = Array.from("12345", (num) => +num + +num);
	console.log(DoubleNums);

	let reDoubNums1 = Array.from(new Set(Array.from("111234")));
	console.log(reDoubNums1);

	let reDoubNums2 = [...new Set("111234".split(""))];
	console.log(reDoubNums2);

	function args() {
		return Array.from(arguments); // [...arguments]
	}
	console.log(args("shehab", "hesham", "aya", "salma", "shehab"));
};

export const copyWithIn = () => {
	// copyWithIn(target, start?, end?) -> Copy Part From The Array To Other One In The Same Array
	let arr1 = [10, 20, 30, 40, 50, "A", "B"];
	console.log(arr1.copyWithin(3)); // [10, 20, 30, 10, 20, 30, 40]

	let arr2 = [10, 20, 30, 40, 50, "A", "B"];
	console.log(arr2.copyWithin(4, 6)); // [10, 20, 30, 40, 'B', 'A', 'B']

	let arr3 = [10, 20, 30, 40, 50, "A", "B"];
	console.log(arr3.copyWithin(-3, -1)); // [10, 20, 30, 40, 'B', 'A', 'B']

	let arr4 = [10, 20, 30, 40, 50, "A", "B"];
	console.log(arr4.copyWithin(1, 5)); // [10, 'A', 'B', 40, 50, 'A', 'B']

	let arr5 = [10, 20, 30, 40, 50, "A", "B"];
	console.log(arr5.copyWithin(1, -2, -1)); // [10, 'A', 30, 40, 50, 'A', 'B']
};

export const some = () => {
	// some((element, index) => {}, this arg) -> Break If Any Element In The Array Currect The Condition
	let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let arg = 10;
	let minmax = { min: 10, max: 20 };

	console.table({
		// ############## Checker ##############
		checker: nums.some((el) => el >= 5),

		// ############## This Argument ##############
		thisArgument: nums.some(function (el) {
			return el >= this;
		}, arg),

		// ############## Range() ##############
		isInRange: nums.some(function (el) {
			return el >= this.min && el <= this.max;
		}, minmax),
	});
};

export const every = () => {
	// every((element, index) => {}, this Argument) -> It Is The Opposite To Some()

	let mainLocation = 15; // false
	// let mainLocation = 50; // true

	let locations = { 10: "place 1", 20: "place 2", 30: "place 3", 40: "place 4" };

	let arr = Object.keys(locations).map((el) => +el); // [10, 20, 30, 40]
	let check = arr.every(function (el) {
		return this > el;
	}, mainLocation);

	console.log(check);
};
