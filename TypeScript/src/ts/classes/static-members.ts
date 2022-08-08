export default function StaticMembers() {
	class User {
		static created: number = 0;
		static getCount(): void {
			console.log(`${this.created} Objects Was Created`);
		}
		constructor(public username: string) {
			User.created++;
		}
	}

	const u1 = new User("shehab");
	const u2 = new User("hesham");
	const u3 = new User("aya");
	const u4 = new User("salma");
	const u5 = new User("wahed");
	console.log(u1.username);
	console.log(u2.username);
	console.log(u3.username);
	console.log(u4.username);
	console.log(u5.username);
	User.getCount();
}
