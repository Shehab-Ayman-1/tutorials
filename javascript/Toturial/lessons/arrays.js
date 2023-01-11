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

	array.sort();
	console.log(array); // [10, 100, 20, 200, 400, 500, 'aya', 'rahma']

	array.sort((a, b) => a - b);
	console.log(array); // [10, 20, 100, 200, 400, 500, 'aya', 'rahma']

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
