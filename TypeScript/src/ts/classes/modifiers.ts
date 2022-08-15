/* 
    readonly  => Can't Update This Property
    private   => Just Use In This Class
    protected => Just Use In The Subclasses
*/

export function Modifiers() {
	class User {
		// readonly id: number
		// private username: string;
		// protected salary: number;
		msg: () => string;

		constructor(readonly id: number, private username: string, protected salary: number) {
			this.msg = () => {
				return `ID: ${this.id}, username: ${this.username}, salary ${this.salary}`;
			};
		}

		Power = (n: number) => n ** 2;
	}

	const user = new User(10, "shehab", 6000);
	// console.log(user.username); // Property 'username' is private and only accessible within class 'User'.
	// console.log(user.salary); // Property 'salary' is protected and only accessible within class 'User' and its subclasses.
	console.log(user.msg());
	console.log(user.Power(5));
}
