export const DT_Assign1 = () => {
	// Write Your Code Here
	type n = number;

	// Do Not Edit Here
	let myData: n;
	myData = 1000; // No Problem Here
	myData = +true; // No Problem Here
	console.log(myData);
};

export const DT_Assign2 = () => {
	// Write Your Code Here
	type mix = number | boolean;

	// Do Not Edit Here
	let myInfo: mix;
	myInfo = 1000; // No Problem Here
	myInfo = true; // No Problem Here
	console.log(myInfo);
};

export const DT_Assign3 = () => {
	// Write Your Code Here
	type Info = {
		theName: string;
		theAge: number;
	};
	type Full = Info & {
		country: string;
	};

	// Do Not Edit Here
	function showInfo(data: Info) {
		console.table(data);
	}
	showInfo({ theName: "Elzero", theAge: 40 });

	function showFullInfo(data: Full) {
		console.table(data);
	}
	showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" });
};

export const DT_Assign4 = () => {
	// Write Your Code Here
	function yesOrNo(val: any): boolean | "Error" {
		if (typeof val !== "number") return "Error";

		return val > 10 ? true : val < 10 ? false : "Error";
	}

	// Do Not Edit Here
	console.log(yesOrNo("100")); // Error
	console.log(yesOrNo(30)); // True
	console.log(yesOrNo(8)); // False
};

export const DT_Assign5 = () => {
	// Write Your Code Here
	type custom = "Error" | "Yes" | "No";

	function isHeOld(age: any): custom {
		if (typeof age !== "number") return "Error";

		if (age > 35) {
			return "Yes";
		} else if (age < 35) {
			return "No";
		} else {
			return "Error";
		}
	}

	// Do Not Edit Here
	console.log(isHeOld("100")); // Error
	console.log(isHeOld(45)); // "Yes"
	console.log(isHeOld(30)); // "No"
};

export const DT_Assign6 = () => {
	// const post: [number, string, boolean] = [100, 200, "Title"]; // Error
	// const post: [number, string, boolean] = ["Title", 100, true]; // Error
	const post: readonly [number, string, boolean] = [100, "Title", true]; // Good

	// post.push("Elzero"); // Error => Cant Add

	// Create Destructuring Here
	const [id, title, state] = post;

	// Do Not Edit Here
	console.table({ id, title, state }); // 100, Title, true
};

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

export const DT_Assign8 = () => {
	const user: {
		username: string;
		age: string | number;
		website?: string;
		skills: { frontEnd: string[]; backEnd: (string | number)[] };
	} = {
		username: "Elzero",
		age: 40,
		website: "Elzero.org",
		skills: { frontEnd: ["HTML", "CSS", "JS"], backEnd: ["PHP", "Python"] },
	};

	// We Need To Remove Error From This Edits
	user.username = "Osama";
	user.age = "40";
	user.skills.backEnd.push(100);
};
