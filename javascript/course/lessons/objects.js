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

export const freeze = () => {
	const obj = { name: "shehab", age: 21 };
	delete obj.name; // Delete Name
	console.log(obj); // { age: 21 }

	Object.freeze(obj); // Freeze The Object
	delete obj.age; // error -> Cannot Delete Property 'age'

	console.log(delete obj.age); // false
	console.log(obj); // { age: 21 }
};

export const keys = () => {
	let obj = { name: "shehab", age: 21, skills: [] };
	let keys = Object.keys(obj);
	console.log(keys); // ["name", "age", "skills"]
};

export const values = () => {
	let obj = { name: "shehab", age: 23, skills: ["html", "css", "js"] };
	let values = Object.values(obj);
	console.log(values);
};

export const defineProperty = () => {
	/* 
    defineProperty(object, 'key', {attributes}):
    - value: -> The Property Value
    - writeable: -> Mind To Update This Key, default = false
    - enumerable: -> Mind To Make Looping On This Key, default = false
    - configrable: -> Mind Delete OR Re Declear This Key, default = false
    */
	let obj = { a: 1, b: 2 };

	Object.defineProperty(obj, "c", { value: 3, writable: false, enumerable: false, configurable: false });

	console.log(obj); // {a: 1, b: 2, c: 3}

	// obj.c = 2000; // Error, It's To Read Obly [writeable]

	// delete obj.c; // Error, can't Delete Property 'c' [configurable]

	for (let i in obj) console.log(`${i} -> ${obj[i]}`); // a -> 1, b -> 2
};

export const defineProperties = () => {
	/* 
    defineProperties(object, {key: {attributes}})
    - value: -> The Property Value
    - writeable: -> Mind To Update This Key, default = false
    - enumerable: -> Mind To Make Looping On This Key, default = false
    - configrable: -> Mind Delete OR Re Declear This Key, default = false
    */

	let obj = { a: 1, b: 2 };

	Object.defineProperties(obj, {
		d: { value: 4, writable: true },
		e: { value: 5, enumerable: true },
		f: { value: 6, configurable: true },
	});

	console.log(obj);
};

export const propertyDescriptor = () => {
	let obj = { a: 1, b: 2, c: 3 };

	Object.defineProperties(obj, {
		d: { value: 4, writable: true },
		e: { value: 5, enumerable: true },
		f: { value: 6, configurable: true },
	});

	console.log(Object.getOwnPropertyDescriptor(obj, "e"));
	console.log(Object.getOwnPropertyDescriptors(obj));
};
