export function Polimorphism() {
	class Player {
		constructor(public name: string) {}
		attack(): void {
			console.log("Attacking Now...");
		}
	}

	class Amazon extends Player {
		constructor(name: string, public spears: number) {
			super(name);
		}

		override attack(): void {
			// super.attack();
			this.spears -= 1;
			console.log("Amazon Using Spear");
		}
	}

	class Burberian extends Player {
		constructor(name: string, public axeDurability: number) {
			super(name);
		}

		override attack(): void {
			// super.attack();
			this.axeDurability -= 1;
			console.log("Burbarian Using Axe");
		}
	}

	const burbarian = new Burberian("shehab", 500);
	const amazon = new Amazon("hesham", 200);

	burbarian.attack();
	console.log(burbarian.axeDurability);

	amazon.attack();
	console.log(amazon.spears);

	burbarian.attack();
	console.log(burbarian.axeDurability);

	amazon.attack();
	console.log(amazon.spears);
}
