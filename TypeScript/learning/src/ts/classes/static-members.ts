export function StaticMembers() {
	class User {
		static created: number = 0;
		static getCount(): void {
			console.log(`${this.created} Objects Was Created`);
		}
		constructor(public username: string) {
			User.created++;
		}
	}

	const { username: u1 } = new User("shehab");
	const { username: u2 } = new User("hesham");
	const { username: u3 } = new User("aya");
	const { username: u4 } = new User("salma");
	const { username: u5 } = new User("wahed");
	console.table({ u1, u2, u3, u4, u5 });
	User.getCount();
}
