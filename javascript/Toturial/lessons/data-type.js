export const set = () => {
	/* 
    - size         -> Return The Set Length
    - add          -> Add New Value In The Array
    - Delete       -> Delete Value From The Set If It Is Defined, Return [TRUE, FALSE]
    - clear        -> Delete All Values In The Set
    - keys, values -> Control In Each Step Of The Loop
    - forEach      -> Make Loop On The Set
    - entries      -> Double Each Value In The Iteration In New Array
    */

	let nums = [1, 1, 1, 2, 1, 3, "A"];
	let uniqueNums = new Set(nums);

	// Size
	console.log(`############# Size #############`);
	console.log(uniqueNums); // {1, 2, 3, "A"}
	console.log(uniqueNums.size); // 4

	// Add
	console.log(`############# Add #############`);
	uniqueNums.add(1).add(4).add(5);
	console.log(uniqueNums); // {1, 2, 3, "A", 4, 5}

	// Delete
	console.log(`############# Delete #############`);
	uniqueNums.delete(2);
	uniqueNums.delete(22);
	console.log(uniqueNums.delete(1)); // true
	console.log(uniqueNums); // {3, "A", 4, 5}

	// Has
	console.log(`############# Has #############`);
	console.log(uniqueNums.has("A")); // True
	console.log(uniqueNums.has(33)); // False

	// Keys() == values()
	console.log(`############# Keys, Values #############`);
	let keys = uniqueNums.keys();
	console.log(keys.next()); // {value: 3, done: false}
	console.log(keys.next()); // {value: "A", done: false}
	console.log(keys.next()); // {value: 4, done: false}
	console.log(keys.next()); // {value: 5, done: false}
	console.log(keys.next()); // {value: undefined, done: true}

	// Entries
	console.log(`############# Entries #############`);
	let entries = uniqueNums.entries([1, 2, 3, 1]);
	console.log(entries.next());
	console.log(entries.next());
	console.log(entries.next());
	console.log(entries.next());
	console.log(entries.next());

	// ForEach
	console.log(`############# ForEach #############`);
	uniqueNums.forEach((ele) => console.log(ele));

	// Clear
	console.log(`############# Clear #############`);
	uniqueNums.clear(); // {}
	console.log(uniqueNums);

	// Unique Elements In New Array
	console.log(`############# Unique Elements In New Array #############`);
	function args() {
		return [...new Set(arguments)]; // [...arguments]
	}
	console.log(args("shehab", "hesham", "aya", "salma", "shehab", "aya"));
};

export const weekSet = () => {
	/* 
    - weekSet -> Just Accept An Objects
        - add
        - delete
        - has
    */

	let weakSet = new WeakSet([{ a: "A", b: "B" }]);

	// Add
	weakSet.add({ c: "C", d: "D" });
	console.log(weakSet);

	// Delete
	weakSet.delete({ a: "A", b: "B" });
	console.log(weakSet);

	// Has
	console.log(weakSet.has({ a: "A", b: "B" }));
};

export const newMap = () => {
	/* 
	new map(key, value)
	- Size, Clear
	- Get, Set, Delete, Has
	- Keys, Values, Entries, ForEach
	*/
	let map = new Map([
		["name", "ahmed"],
		["age", 22],
		["available", true],
		["countries", { egypt: "alex", usa: "newyork" }],
		["fullname", (a, b) => `My Full Name Is: ${a} ${b}`],
	]);

	// Add
	console.log(`\n######### Add #########`);
	map.set("skills", ["html", "css", "js"]);
	console.log(map); // {"name": "ahmed", "age": 22, "available": true, "countries": { egypt: "alex", usa: "newyork" }, "fullname": (a, b) => `My Full Name Is: ${a} ${b}`, "skills": ["html", "css", "js"]}

	// Size
	console.log(`\n######### Size #########`);
	console.log(map.size); // 6

	// Get
	console.log(`\n######### Get #########`);
	console.log(map.get("name")); // ahmed
	console.log(map.get("age")); // 22
	console.log(map.get("available")); // true
	console.log(map.get("skills")); // ['html', 'css', 'js']
	console.log(map.get("fullname")("shehab", "ayman")); // My Full Name Is: shehab ayman

	// Delete
	console.log(`\n######### Delete #########`);
	map.delete("age"); // Age Has Been Deleted
	console.log(map.delete("countries")); // true

	// Has
	console.log(`\n######### Has #########`);
	console.log(map.has("name")); // true
	console.log(map.has("attr")); // false

	// Keys
	console.log(`\n######### Keys #########`);
	let keys = map.keys();
	console.log(keys); // {'name', 'available', 'fullname', 'skills'}
	console.log(keys.next()); // {value: 'name', done: false}
	console.log(keys.next()); // {value: 'available', done: false}
	console.log(keys.next()); // {value: 'fullname', done: false}
	console.log(keys.next()); // {value: 'skills', done: false}
	console.log(keys.next()); // {value: 'undefined', done: true}

	// Values
	console.log(`\n######### Values #########`);
	let values = map.values();
	console.log(values); // {'ahmed', true, f, array}
	console.log(values.next()); // {value: 'ahmed', done: false}
	console.log(values.next()); // {value: 'true', done: false}
	console.log(values.next()); // {value: 'f', done: false}
	console.log(values.next()); // {value: 'array', done: false}
	console.log(values.next()); // {value: 'undefined', done: true}

	// Entries
	console.log(`\n######### Entries #########`);
	let entries = map.entries();
	console.log(entries); // {value: ['name', 'ahmed'], done: false}
	console.log(entries.next()); // {value: ['name', 'ahmed'], done: false}
	console.log(entries.next()); // {value: ['age', 'ahmed'], done: false}
	console.log(entries.next()); // {value: ['available', 'ahmed'], done: false}
	console.log(entries.next()); // {value: ['name', 'ahmed'], done: false}
	console.log(entries.next()); // {value: 'undefined', done: true}

	// ForEach
	console.log(`\n######### ForEach #########`);
	map.forEach((value, key) => console.log(`{ ${key}: ${value} }`));

	// Clear
	map.clear();
	console.log(`\n######### Clear #########`);
	console.log(map);
};
