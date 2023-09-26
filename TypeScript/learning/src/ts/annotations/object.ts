type MyObj = {
	readonly username: string;
	age?: number; // ? To Make It Optional
	available: boolean;
};

export function Objects() {
	let myObj: MyObj = {
		username: "shehab",
		available: true,
	};

	// myObj.username = "Aya"; // Cannot assign to 'username' because it is a read-only property.
	myObj.age = 25;
	myObj.available = false;
	console.log(myObj);
}
