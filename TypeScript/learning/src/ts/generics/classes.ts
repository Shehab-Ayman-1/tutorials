export function Classes() {
	// genType => Is A String As A Default Type
	class User<genType = string> {
		constructor(public val: genType) {}
		show(msg: genType): void {
			console.log(`${msg} - ${this.val}`);
		}
	}

	const user1 = new User("shehab");
	user1.show("My Name Is");
	console.log(user1.val);

	const user2 = new User(100);
	// user2.show("My Name Is"); // Argument of type 'string' is not assignable to parameter of type 'number'.
	console.log(user2.val);

	const user3 = new User<string | boolean>(true);
	user3.show("Is Available");
	console.log(user3.val);
}
