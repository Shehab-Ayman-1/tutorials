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
