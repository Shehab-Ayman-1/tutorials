export const Interface_Assign1 = () => {
	// Edit The Interface To Fix The Problems
	interface Member {
		id: string | number;
		username: string;
		country?: string;
		state: boolean;
		getName(): string;
	}

	// Do Not Edit The Code Below
	let user: Member = {
		// Property 'country' is missing in type
		id: 100,
		username: "Elzero",
		state: true,
		getName() {
			// 'getName' does not exist in type 'Member'
			return this.username;
		},
	};

	user.id = 200;
	user.id = "200"; // Type 'string' is not assignable to type 'number'
	user.state = false; // Cannot assign to 'state' because it is a read-only property
};

export const Interface_Assign2 = () => {
	// Create Interface Here
	interface Client {
		id: number;
		username: string;
		active: boolean;
		discount: number;
		getPrice(price: number): number;
	}

	// Do Not Edit The Code Below
	let client: Client = {
		id: 100,
		username: "Elzero",
		active: true,
		discount: 10,
		getPrice(price: number) {
			return price - this.discount;
		},
	};

	console.log(`Client Id Is ${client.id}`);
	console.log(`Client Name Is ${client.username}`);
	console.log(`Client Has Dicount ${client.discount}`);
	console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
};

export const Interface_Assign3 = () => {
	// Do Not Edit The Code Below
	interface Man {
		title: string;
		weight: number;
		age: number;
	}

	interface Bird {
		canFly: boolean;
	}

	interface Superman extends Man, Bird {
		bodyType: string;
		origin: string;
	}

	let creature: Superman = {
		title: "Superman",
		weight: 100,
		age: 500,
		canFly: true,
		bodyType: "Iron",
		origin: "Krypton",
	};

	console.table(creature);
};
