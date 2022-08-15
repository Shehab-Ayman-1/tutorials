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
