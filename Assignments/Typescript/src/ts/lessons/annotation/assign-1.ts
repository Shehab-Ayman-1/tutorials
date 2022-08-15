export const Anno_Assign1 = () => {
	function calculate(numOne: number, numTwo: number) {
		return numOne + numTwo;
	}

	console.log(calculate(10, 20)); // 30
	// console.log(calculate("10", "20")); // We Don't Need This To Work => Error
	console.log(calculate(+true, +true)); // 2
};
