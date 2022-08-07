export default function Objects() {
	let myObj: {
		readonly username: string;
		age?: number; // ? To Make It Optional
		available: boolean;
	} = {
		username: "shehab",
		available: true,
	};

	// myObj.username = "Aya"; // Cannot assign to 'username' because it is a read-only property.
	myObj.age = 25;
	myObj.available = false;
	console.log(myObj);
}
