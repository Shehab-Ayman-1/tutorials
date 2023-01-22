export const createObject = () => {
	// Create Object With Object Constructor
	let std = new Object({ id: 22011993, name: "shehab", age: 21, signIn: 2022, OutIn: () => std.signIn + 5 });
	std.level = 0; // add New Property
	std.age = 25; // Update New Property
	console.table(std);
	console.log(std.OutIn());

	let user = {
		"My Name Is": "shehab",
		age: 21,
		isAvailable: true,
		faculty: "Engeneering Universty",
		skills: ["html", "css", "javascript"],
		workedIn: { egypt: "Cairo", usa: "New York" },
	};
	console.log(user);
};

export const create = () => {
	// create(mainObject) -> Is Used To Create A Prototype From The Main Object
	let std = new Object({
		id: 22011993,
		name: "shehab",
		age: 21,
		signIn: 2022,
		thisOutIn: function () {
			return this.signIn + 5;
		},
		stdOutIn: function () {
			return std.signIn + 5;
		},
	});
	let prototype = Object.create(std);
	prototype.signIn = 2025;
	console.log(prototype); // { signIn: 2025 }
	console.table({ age: prototype.age, stdOutIn: prototype.stdOutIn(), thisOutIn: prototype.thisOutIn() });
};

export const assign = () => {
	// assign(target, ...objects) -> Append Copied Objects To The Target Object
	let obj1 = { prop1: 1, meth1: () => obj1.prop1 };
	let obj2 = { prop2: 2, meth2: () => obj2.prop2 };
	let target = { prop1: 100, prop2: 200, prop3: 300, prop4: 400, meth: () => target.prop3 };

	let finalObject = Object.assign(target, obj1, obj2); // Just Get The First Duplicated Properties

	finalObject.prop2 = 20; // Update

	console.table({ finalObject });
};

export const keys = () => {};

export const values = () => {};
