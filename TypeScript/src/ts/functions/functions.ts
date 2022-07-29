const Functions = () => {
	/* Annotations In Functions */
	// In Js, Maybe The User Enter String So The Compiler Will Concatenat The Value Not Sum Them
	function sum(num1: number, num2: number) {
		return num1 + num2;
	}
	sum(1, 2);

	/* Arrow Functions */
	const showDetails = (name: string, age: number, salary: number): string => {
		if (true) {
			return `Hello: ${name}, Age: ${age}, Salary: ${salary}`;
		}
		return "SomeThing, Has An Error !";
	};
	showDetails("shehab", 21, 5000);

	/* Options Parameters */
	// ? => Optional Parameter [ Have To Be In The Last Parameters ]
	function showUser(name: string, age: number, country: string = "egypt", isAvailable?: boolean) {
		if (isAvailable) {
			return `My Name: ${name}, Age: ${age}, Country: ${country}`;
		}
		console.log("Sorry, This User Is Not Available");
	}
	showUser("shehab", 21, "egypt", true);

	/* Rest Parameters */
	function restParams(...nums: number[]) {
		let result: number = 0;

		for (let num of nums) {
			result += num;
		}
		return result;
	}
	console.log("Rest Parameters => ", restParams(1, 2, 3, 4, 5, 6, 7, 8, 9));
};

export default Functions;
