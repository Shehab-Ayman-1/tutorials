export function RestParameters() {
	function restParams(...nums: number[]) {
		let result: number = 0;
		nums.forEach((num) => (result += num));
		return result;
	}

	console.log("Rest Parameters => ", restParams(1, 2, 3, 4, 5, 6, 7, 8, 9));
}
