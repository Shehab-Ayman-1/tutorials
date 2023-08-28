export const lonelyInteger = () => {
	/* Examples
      - Given an array of integers, where all elements but one occur twice, find the unique element.
   */

	const a: number[] = [1, 2, 3, 4, 3, 2, 1];
	let result: number | undefined;

	a.forEach((num, i) => {
		// Clone The Array
		let temp = Array.from(a);

		// Delete The Current Number From The Temp
		delete temp[i];

		// If The Number Is Steal Defined, So It Is Dublicated
		if (temp.includes(num)) return;
		// Else => Push It To The Result
		result = num;
	});

	console.log(result);
	return result;
};

export const gradingStudents = () => {
	/* Examples
      - If the difference between the Grade and the next multiple of 5 is less than 3, round Grade up to the next multiple of 5.
		- If the value of Grade is less than 38, no rounding occurs as the result will still be a failing grade.
		- 38 -> Round
		- 50 -> Steal
		- 51 -> Not Round
		- 52 -> Not Round
		- 53 -> Round
		- 54 -> Round
		- 55 -> Steal
		- 56 -> Not Round
		- 57 -> Not Round
		- 58 -> Round
		- 59 -> Round
		- 60 -> Steal
   */

	const grades: number[] = [73, 67, 38, 33];
	const afterBonus: number[] = [];

	grades.forEach((grade) => {
		if (grade % 5 >= 3 && grade > 37) afterBonus.push(grade + (5 - (grade % 5)));
		else afterBonus.push(grade);
	});

	console.log(afterBonus);
	return afterBonus;
};

export const flippingBits = () => {
	/* Examples
		- Convert The Decimal Number [n] To Binary With 32 Bits
		- Flip The Binary Code [0 -> 1] And [1 -> 0]
		- Convert The Flipped Binary Code To Decimal Again
		- Return The Decimal Number
	*/
	const n: number = 2147483647;

	const convertTo32Bit = () => {
		let binary = (n >>> 0).toString(2);
		let newBinary = binary;
		for (let i = 0; i < 32 - binary.length; i++) newBinary = `0${newBinary}`;
		return newBinary;
	};

	const converToDecimal = (num: string) => {
		const decimal = parseInt(num, 2);
		return decimal;
	};

	const _32bit = convertTo32Bit();
	const flipping = _32bit.split("").map((num) => (+num === 0 ? "1" : "0"));
	const decimal = converToDecimal(flipping.join(""));

	console.log(decimal);
	return decimal;
};

export const diagonalDifference = () => {
	/* Example
		- Given a square matrix, calculate the absolute difference between the sums of its diagonals.
		- For example, the square matrix arr is shown below:
		- The left-to-right diagonal -> 1 + 5 + 9 = 15. The right to left diagonal -> 3 + 5 + 9 = 17. Their absolute difference is .
		- The Absolute Difference Between Them |15 - 17| = 2
	*/
	const arr: number[][] = [
		[1, 2, 3],
		[4, 5, 6],
		[9, 8, 9],
	];

	let ltr = arr.map((ar, i) => ar.at(i)).reduce((prev, acc) => (prev === undefined || acc === undefined ? acc : prev + acc), 0);
	let rtl = arr.map((ar, i) => ar.at(-++i)).reduce((prev, acc) => (prev === undefined || acc === undefined ? acc : prev + acc), 0);

	const result = Math.abs((ltr || 0) - (rtl || 0));
	console.log(result);
	return result;
};

export const countingSort = () => {
	/* Examples
		- Given a list of integers, count and return the number of times each value appears as an array of integers.
		Alternative Sorting
		- Its Not An Algorithm, its Just Count The Frequancy Elements In Tha Array
	*/
	const arr: number[] = [
		63, 25, 73, 5, 5, 5, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27,
		32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75,
		13, 87, 70, 33,
	];

	let result = Array(Math.max(...arr) + 2).fill(0);

	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i === arr[j]) {
				result[i] += 1;
			}
		}
	}

	console.log(result);
	return result;
};

export const countingValleys = () => {
	/* Example
		- Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
		- 1 Valley = Each Time The Hiker Down In The See Then Up Again To The Land
		- Up Hill -> U, Down Hill -> D
		- Steps = 8 paths = [D, D, U, U, U, U, D, D]
		- The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.
		Return
		- int: the number of valleys traversed
	*/
	let path: string = "DDUUDDUDUUUD"; // UDDDUDUU - DDUUDDUDUUUD
	let paths = path.split("");

	let movement: number = 0;
	let valley: number = 0;

	paths.forEach((path) => {
		// Track The Hiker Movement
		if (path === "U") movement += 1;
		else movement -= 1;

		// Check If The Hiker Is On The Surfece Or Not, If movement = 0 -> Then The Hiker On The Surface
		// Check If The Hiker Is Up Hill OR Down Hill
		if (movement === 0 && path === "U") {
			valley += 1;
		}
	});

	console.log(valley);
	return valley;
};

export const pangrams = () => {
	/* Examples
		- A pangram is a string that contains every letter of the alphabet. 
		- Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. 
		- Return either pangram or not pangram as appropriate.
	*/
	const s: string = "We promptly judged antique ivory buckles for the next prize";
	const alphs = "abcdefghijklmnopqrstuvwxyz";

	const isPangrams = alphs.split("").every((letter) => s.toLowerCase().includes(letter));
	const result = isPangrams ? "pangram" : "not pangram";

	console.log(result);
	return result;
};

export const marsExploration = () => {
	/* Examples
		- Catch The Wrong Messages That Sent From The Mars
		Return
		- int: The Count Of Wrong Messages
	*/
	const s: string = "SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO";
	const msgsCount: number = s.length / 3;
	const currectMsg: string = "SOS".repeat(msgsCount);
	let wrongs: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== currectMsg[i]) wrongs += 1;
	}

	console.log(wrongs);
	return wrongs;
};

export const fizzBuzz2 = () => {
	const n: number = 15;

	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0 && i % 5 !== 0) {
			console.log("Fizz");
		} else if (i % 5 === 0 && i % 3 !== 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};

export const mockTest2 = () => {
	/* Examples
		- 
	*/
	const matrix: number[][] = [
		[107, 54, 128, 15],
		[12, 75, 110, 138],
		[100, 96, 34, 85],
		[75, 15, 28, 112],
	]; // 488

	let col2 = [];

	for (let rowIndex in matrix) col2.push(matrix[rowIndex][2]);

	col2.reverse();

	for (let rowIndex in matrix) matrix[rowIndex][2] = col2[rowIndex];

	matrix[0].reverse();

	const result: number = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
	console.log(matrix);
	return result;
};
