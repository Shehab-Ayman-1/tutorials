export const Methods = () => {
	interface user {
		id: number;
		readonly username: string;
		isHire?: boolean;
		skills: string[];
		sayHello(): string;
		sayWelcome: () => string;
		getPower: (num: number) => number;
	}
	const myUser: user = {
		id: 1,
		username: "shehab",
		skills: ["javascript", "typescript"],
		sayHello() {
			return `Hello ${this.username}`;
		},
		sayWelcome: () => `Welcone ${myUser.username}`,
		getPower: (n) => n ** 2,
	};
	// myUser.username = "aya"; // Cannot assign to 'username' because it is a read-only property.
	console.log(myUser);
	console.log(myUser.sayHello());
	console.log(myUser.sayWelcome());
	console.log(myUser.getPower(3));
};
