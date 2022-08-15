export const DT_Assign7 = () => {
	// Create Enums + Function Here
	const GetInsane = (n: number): number => n;
	enum Game {
		Easy = 100,
		Medium = Easy - 20,
		Hard = Medium - Easy / 2,
		Insane = Hard - GetInsane(10),
	}

	// Output
	console.table(Game); // 100, 80, 30, 20
};