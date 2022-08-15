export const Generic_Assign2 = () => {
	// Write Class Code Here
	class Game<gen> {
		constructor(public title: gen, public price: number) {}

		getDiscount(msg: gen): void {
			console.log(`The Discount Is: ${msg}`);
		}
	}

	// Do Not Edit Here
	let gameOne = new Game<string>("Ys", 100);
	let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

	console.log(gameOne.title); // "Ys"
	console.log(gameOne.price); // 100
	gameOne.getDiscount("50"); // "The Discount Is 50"

	console.log(gameTwo.title); // 2064
	console.log(gameTwo.price); // 100
	gameTwo.getDiscount(80); // "The Discount Is 80"
};
