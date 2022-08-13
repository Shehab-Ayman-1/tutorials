export const Class_Assign1 = () => {
	// Create Class Here
	class Player {
		details: () => object;

		constructor(name: string, type: string, level: string | number, state?: boolean) {
			this.details = () => {
				if (!state) return { name, type, level };
				return { name: name === "Osama" || name === "Amr" ? `VIP ${name}` : name, type, level, state };
			};
		}
	}

	// Do Not Edit The Code Below
	let player1 = new Player("Osama", "Mage", 90, true);
	let player2 = new Player("Shady", "Archer", "85", false);
	let player3 = new Player("Amr", "Fighter", 50, true);
	let player4 = new Player("Mahmoud", "Assassin", 77);

	console.table(player1.details()); // VIP Osama, Type Is Mage Level Is 90
	console.table(player2.details()); // Shady, Type Is Archer Level Is 85
	console.table(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
	console.table(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
};

export const Class_Assign2 = () => {
	class Shorten {
		constructor(public id: number, public username: string, protected title: string) {}
	}

	let tester = new Shorten(100, "Elzero", "Developer");

	console.table({ id: tester.id, username: tester.username });
};

export const Class_Assign3 = () => {
	class Show {
		constructor(private _title: string) {}

		get title(): string {
			return this._title;
		}
		set title(val: string) {
			this._title = val;
		}
	}

	let tester = new Show("Osama");

	console.log(tester.title); // Property 'title' does not exist on type 'Show'
	tester.title = "Elzero"; // Property 'title' does not exist on type 'Show'
	console.log(tester.title); // Property 'title' does not exist on type 'Show'
};

export const Class_Assign4 = () => {
	interface Play {
		id: number;
		title: string;
		level: string | number;
		logIn(): string;
		logOut(msg: string): string;
	}

	// Create Your Class Here
	class Player implements Play {
		constructor(public id: number, public title: string, public level: string | number) {}
		logIn() {
			return "Logged In";
		}
		logOut(val: string) {
			return `Logged Out, ${val}`;
		}
	}

	let { id, title, level, logIn, logOut } = new Player(100, "Elzero", 95);
	console.table({ id, title, level, login: logIn(), logout: logOut("Good Bye") }); // 100, ELzero, 95, Logged In, Logged Out Good Bye
};

export const Class_Assign5 = () => {};
export const Class_Assign6 = () => {};
export const Class_Assign7 = () => {};
