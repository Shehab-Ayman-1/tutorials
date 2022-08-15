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
