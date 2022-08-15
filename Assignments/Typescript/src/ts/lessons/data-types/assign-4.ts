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
