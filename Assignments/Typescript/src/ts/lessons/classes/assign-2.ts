export const Class_Assign2 = () => {
	class Shorten {
		constructor(public id: number, public username: string, protected title: string) {}
	}

	let tester = new Shorten(100, "Elzero", "Developer");

	console.table({ id: tester.id, username: tester.username });
};
