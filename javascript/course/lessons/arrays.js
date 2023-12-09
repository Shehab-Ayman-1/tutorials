export const control = () => {
	let myFriends = ["Shehab", "Hesham", "Aya", ["Mahmoud", "Fady"]];

	console.log(Array.isArray(myFriends)); // true

	myFriends[3][1] = "Saif";
	console.log(myFriends); // ["Shehab", "Hesham", "Aya", ["Mahmoud", "Saif"]]

	myFriends[myFriends.length - 1] = "Gamal";
	console.log(myFriends); // ["Shehab", "Hesham", "Aya", ["Mahmoud", "Fady"], "Gamal"]

	myFriends.length = 2;
	console.log(myFriends); // ["Shehab", "Hesham"]

	const getFriend = myFriends.at(-1);
	console.log(getFriend); // Hesham

	let setFriend = myFriends.with(-1, ["Farha"]);
	console.log(setFriend); // ["Shehab", ["Farha"]]
};

export const adding = () => {
	let myArr = ["shehab", "hesham", "aya"];

	myArr[myArr.length] = "Gamal";
	console.log(myArr); // ["Shehab", "Hesham", "Aya", "Gamal"]

	myArr.unshift("Osama"); // ["Osama", "shehab", "hesham", "aya"]
	console.log(myArr);

	myArr.push("Gamal");
	console.log(myArr); // ["Osama", "shehab", "hesham", "aya", "Gamal"]
};

export const removing = () => {
	let girls = ["salma", "aya", "farha", "rahma"];
	let first = girls.shift();
	let last = girls.pop();

	console.log(girls); // ["salma", "aya", "farha", "rahma"]
	console.log(first); // ["aya", "farha", "rahma"]
	console.log(last); // ["salma", "aya", "farha"]
};

export const search = () => {
	let names = ["salma", "shehab", "hesham", "aya", "salma"];

	console.log(names.indexOf("salma")); // 0
	console.log(names.indexOf("salma", 1)); // 4

	console.log(names.lastIndexOf("salma")); // 4
	console.log(names.lastIndexOf("salma", -2)); // 0

	console.log(names.includes("hesham")); // true
	console.log(names.includes("hamada")); // false

	console.log(names.find((val, index) => val === "aya")); // aya
	console.log(names.findIndex((val, index) => val === "aya")); //  3
};

export const sorting = () => {
	let array = [10, 400, 20, 100, 500, 200, "rahma", "aya"];
	let names = ["shehab", "hesham", "aya", "salma", "mahmoud"];

	array.sort();
	console.log(array); // [10, 100, 20, 200, 400, 500, 'aya', 'rahma']

	array.sort((a, b) => a - b);
	console.log(array); // [10, 20, 100, 200, 400, 500, 'aya', 'rahma']

	names.sort((a, b) => a.localeCompare(b));
	console.log(names); // [10, 20, 100, 200, 400, 500, 'aya', 'rahma']

	array.reverse();
	console.log(array); // ['rahma', 'aya', 500, 400, 200, 100, 20, 10]
};

export const slicing = () => {
	let names = ["ahmed", "sayed", "ali", "osama", "gamal", "ameer"];

	console.log(names.slice(1, 3)); // ["sayed", "ali"]
	console.log(names.slice(-4, -1)); // ["ali", "osama", "gamal"]

	// names.splice(0, 3);
	// console.log(names); // ['osama', 'gamal', 'ameer']

	names.splice(0, 3, "shehab", "hesham", "aya");
	console.log(names); // ["shehab", "hesham", "aya", "osama", "gamal", "ameer"]
};

export const joining = () => {
	let friends = ["hesham", "aya", "rahma", "salma"];
	let newFriends = ["saif", "sherif"];

	let myFriends = friends.concat(newFriends, "farha", ["gamal", "osama"]);
	console.log(myFriends); // ["hesham", "aya", "rahma", "salma", "saif", "sherif", "farha", ["gamal", "osama"]]

	console.log(myFriends.join()); // hesham, aya, rahma, salma, saif, sherif, farha, gamal, osama

	console.log(myFriends.join(" | ")); // hesham | aya | rahma | salma | saif | sherif | farha | 'gamal' | 'osama'
};

export const from = () => {
	// from(word, map()) -> Return new Array From The Iterable String

	let iterable = Array.from("Elzero Web School", (letter) => letter + letter).join("");
	console.log(iterable); // EEllzzeerroo  WWeebb  SScchhooooll

	let DoubleNums = Array.from("12345", (num) => +num + +num);
	console.log(DoubleNums); // [2, 4, 6, 8, 10]

	let reDoubNums1 = Array.from(new Set(Array.from("111234")));
	console.log(reDoubNums1); // ['1', '2', '3', '4']

	let reDoubNums2 = [...new Set("111234".split(""))];
	console.log(reDoubNums2); // // ['1', '2', '3', '4']

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
	let minmax = { min: 10, max: 20 };

	let checkNum = nums.some((num) => num >= 5);
	console.log(checkNum);

	const checkName = nums.some((num) => num === 5);
	console.log(checkName);

	let arg = nums.some(function (num) {
		return num > this;
	}, 10);
	console.log(arg);

	let range = nums.some(function (num) {
		return num >= this.min && num <= this.max;
	}, minmax);
	console.log(range);
};

export const every = () => {
	// every((element, index) => {}, this Argument) -> It Is The Opposite To Some()

	let nums = [10, 20, 30, 40, 50, 60];
	let users = [
		{ name: "shehab", age: 21, available: true },
		{ name: "hesham", age: 20, available: false },
	];
	let arg = 10;

	const check1 = nums.every((num) => num > 5);
	console.log(check1); // true

	const check2 = nums.every(function (num) {
		return num > this;
	}, arg);
	console.log(check2); // false

	const check3 = nums.every(function (num) {
		return num > this - 5;
	}, arg);
	console.log(check3); // true

	const check4 = users.every((user) => user.available);
	console.log(check4); // false

	users[1].available = true;

	const check5 = users.every((user) => user.available);
	console.log(check5); // true
};

export const groupBy = () => {
	const users = [
		{ name: "shehab", age: 21 },
		{ name: "hesham", age: 22 },
		{ name: "aya", age: 23 },
		{ name: "shehab", age: 24 },
	];

	const byKeys = Object.groupBy(users, (user) => user.name);
	console.log(byKeys);
	/* 
		Output
		{
			shehab: [
				{ name: "shehab", age: 21 },
				{ name: "shehab", age: 24 }
			],
			hesham: [
				{ name: "hesham", age: 22 }
			],
			aya: [
				{ name: "aya", age: 23 }
			],
		}
	*/
};

export const flat = () => {
	const arr = [
		1,
		2,
		[3, 4],
		[
			[5, 6],
			[7, 8],
		],
		[
			[
				[9, 10],
				[11, 12],
				[13, 14],
			],
			[
				[15, 16],
				[17, 18],
			],
		],
	];

	const flatArr1 = arr.flat();
	console.log(flatArr1); // [1, 2, 3, 4, [5, 6], [7, 8], ...]

	const flatArr2 = arr.flat(2);
	console.log(flatArr2); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], [11, 12], ...]

	const flatArr3 = arr.flat(Number.MAX_SAFE_INTEGER);
	console.log(flatArr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
};
