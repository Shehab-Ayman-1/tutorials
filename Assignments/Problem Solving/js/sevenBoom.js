export const sevenBoom = () => {
	// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
	function sevenBoom(Nums) {
		// [1] The First Way
		// console.log(Nums.join().includes("7") ? "Boom!" : "there is no 7 in the array");
		// [2] The Second Way
		let arr = Array(Nums)[0].join().split(",");
		let state;
		arr.map((n) => (n.split("").includes("7") ? (state = n) : null));
		if (state !== undefined) console.log(state, "Boom!");
		else console.log("there is no 7 in the array");
	}
	sevenBoom([1, 2, 3, 4, 5, 6, 7]); // ➞ "Boom!"                      // 7 contains the number seven.
	sevenBoom([8, 6, 33, 100]); // ➞ "there is no 7 in the array" // None of the items contain 7 within them.
	sevenBoom([2, 55, 60, 97, 86]); // ➞ "Boom!"                      // 97 contains the number seven.
};
