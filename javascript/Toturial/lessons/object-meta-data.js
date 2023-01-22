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
