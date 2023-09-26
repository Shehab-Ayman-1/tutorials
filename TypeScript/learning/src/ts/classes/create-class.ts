export function CreateClass() {
	class User {
		user: string;
		sal: number;
		msg: () => string;

		constructor(username: string, salary: number) {
			this.user = username;
			this.sal = salary;
			this.msg = () => `Welcome ${this.user}`;
		}

		Power = (n: number) => n ** 2;
	}

	const user = new User("shehab", 6000);
	console.log(user.user);
	console.log(user.sal);
	console.log(user.msg());
	console.log(user.Power(5));
}
