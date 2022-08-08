export default function Extends() {
	interface client {
		readonly id: string | number;
		fName: string;
		lName: string;
		username: string;
		email: string;
	}

	interface moderator extends client {
		role?: string | number;
	}

	interface Admin extends client, moderator {
		isAdmin: boolean;
	}

	const user: Admin = {
		id: 1,
		fName: "shehab",
		lName: "ayman",
		username: "shehab_ayman",
		email: "shehabayman365@gmail.com",
		// role: "mod", // Optional
		isAdmin: true,
	};
	console.log(user);
}
