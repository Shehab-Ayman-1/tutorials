export const plusMinus = () => {
	/* Examples
      - There are n = 5 elements, two positive, two negative and one zero.
      - Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
      - Results are printed as: 0.400000, 0.400000, 0.200000
   */
	const arr = [1, 1, 0, -1, -1];
	const arrLength = arr.length;

	const postive = arr.filter((num) => num > 0).length;
	const negative = arr.filter((num) => num < 0).length;
	const zero = arr.filter((num) => num === 0).length;

	console.table({ postive: (postive / arrLength).toFixed(6), negative: (negative / arrLength).toFixed(6), zero: (zero / arrLength).toFixed(6) });
};

export const miniMaxSum = () => {
	/* Examples
		- arr =[1, 7, 5, 3, 9]
		- the minimum sum is 1 + 3 + 5 + 7 = 16
		- the maximum sum is 3 + 5 + 7 + 9 = 24
		- print 16  25
   */
	let arr: number[] = [5, 5, 5, 5, 5]; // 1, 3, 5, 7, 9

	const smallest = Math.min(...arr);
	const greatest = Math.max(...arr);

	const minimumArr = arr.filter((num) => num !== greatest);
	const maximumArr = arr.filter((num) => num !== smallest);

	let minimum = 0;
	let maximum = 0;

	if (!minimumArr.length) {
		minimum = arr.slice(1).reduce((prev, cur) => prev + cur, 0);
		maximum = arr.slice(1).reduce((prev, cur) => prev + cur, 0);
	} else {
		minimum = minimumArr.reduce((prev, cur) => prev + cur, 0);
		maximum = maximumArr.reduce((prev, cur) => prev + cur, 0);
	}

	console.log(minimum, maximum); // 20, 20
};

export const timeConversion = () => {
	/* Examples
      - s = '12:01:00PM' -> Return '12:01:00'
      - s = '12:01:00AM' -> Return '00:01:00'
   */
	const s = "12:59:00PM";

	const pm = s.indexOf("PM");
	const am = s.indexOf("AM");

	if (pm === -1) {
		let [hours, minuts, seconds] = s.replace(/(AM|am|Am)/g, "").split(":");
		let output = `${+hours === 12 ? `0${+hours - 12}` : hours}:${minuts}:${seconds}`;
		console.log(output);
		return output;
	}

	if (am === -1) {
		let [hours, minuts, seconds] = s.replace(/(PM|pm|Pm)/g, "").split(":");
		let output = `${+hours === 12 ? +hours : +hours + 12}:${minuts}:${seconds}`;
		console.log(output);
		return output;
	}
};

export const breakingRecords = () => {
	/* Examples
		- Scores are in the same order as the games played. She tabulates her results as follows:
		- scores = [10, 5, 20, 20, 4, 5, 2, 25, 1] -> 2, 4
		- scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42] -> 4, 0
		Return 
		- [most, least]: An array with the numbers of times she broke her records.
		- Index 0 is for breaking most points records.
		- index 1 is for breaking least points records.
	*/
	let scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
	let result: number[] = [0, 0];
	let maxRec = scores[0];
	let minRec = scores[0];

	for (let rec of scores) {
		console.log(`rec: ${rec}, max: ${maxRec}, min: ${minRec}`);
		if (rec < maxRec) {
			maxRec = rec;
			result[1] += 1;
		}

		if (rec > minRec) {
			minRec = rec;
			result[0] += 1;
		}
	}

	console.log(result);
	return result;
};

export const camalCase = () => {
	/* Examples
		- write a program that creates or splits Camel Case variable, method, and class names
		- each input contains of: (S|C);(M|C|V);(word)
		- S(Split), C(combine)
		- V(Variable), M(Method), C(Class)

		Sample Inputs/Outputs
		- S;V;pictureFrame -> picture frame
		- S;M;plasticCup() -> plastic cup
		- S;C;LargeSoftwareBook -> large software book
		- C;V;mobile phone -> mobilePhone
		- C;M;white sheet of paper -> whiteSheetOfPaper()
		- C;C;coffee machine -> CoffeeMachine
	*/
	const words = ["S;V;iPad\r", "C;M;mouse pad\r", "C;C;code swarm\r", "S;C;OrangeHighlighter"];
	words.forEach((_word) => {
		let [cond, type, word] = _word.split(";");
		let result: string | string[] = "";

		const split_S = () => {
			let sepWord = word.split("\r")[0].split("");
			for (let i in sepWord) {
				let isCapital = /[A-Z]/g.test(sepWord[i]);
				if (isCapital) sepWord[i] = ` ${sepWord[i].toLowerCase()}`;
			}
			return sepWord.join("");
		};

		const combine_C = (type: string) => {
			const sepWord = word
				.split("\r")[0]
				.split(" ")
				.map((w, i) => {
					if (i === 0 && type !== "C") return w;
					let newWord = w.split("");
					newWord[0] = newWord[0].toUpperCase();
					return newWord.join("");
				});
			return sepWord.join("");
		};

		if (cond === "S") {
			if (type === "V") result = split_S();
			if (type === "M") result = split_S().slice(0, -2);
			if (type === "C") result = split_S().trim();
		}

		if (cond === "C") {
			if (type === "V") result = combine_C("V");
			if (type === "M") result = combine_C("M") + "()";
			if (type === "C") result = combine_C("C");
		}

		console.log(result);
		return result;
	});
};

export const divisibleSumPair = () => {
	/* Examples
		- Given an array of integers and a positive integer k,
		- determine the number of (i, j) pairs, where i < j and ar[i] + ar[j] is divisible by k.
	*/
	const ar: number[] = [
		43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18,
		49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88,
		82, 71,
	];
	const k: number = 22; // Devisor
	let n: number = ar.length;
	let result: number = 0;

	for (let i = 0; i < n + 1; i++) {
		for (let j = 0; j < n; j++) {
			if (i >= j) continue;
			if ((ar[i] + ar[j]) % k === 0) {
				result += 1;
				console.log(`(${i}, ${j}) -> ${ar[i]} + ${ar[j]} = ${ar[i] + ar[j]}`);
			}
		}
	}

	console.log(result);
	return result;
};

export const matchingStrings = () => {
	/* Examples
		- There is a collection of strings and a collection of queries, for each query string.
		- Determine how many times it occurs in the list of input strings.
		- Return an array of the results.
	*/
	const strings: string[] = ["ab", "ab", "abc"];
	const queries: string[] = ["ab", "abc", "bc"];
	const result: number[] = [];

	queries.forEach((query) => {
		const regex = new RegExp(`^${query}$`, "");
		const filtered = strings.filter((string) => regex.test(string));
		result.push(filtered.length);
		console.log(filtered);
	});

	console.log(result);
	return result;
};

export const fizzBuzz1 = () => {
	const n: number = 15;

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0 && i % 5 !== 0) {
			console.log("Fizz");
		} else if (i % 5 === 0 && i % 3 !== 0) {
			console.log("Buzz");
		} else if (i % 5 !== 0 && i % 3 !== 0) {
			console.log(i);
		}
	}
};

export const mockTest1 = () => {
	/* Examples
		- Get The Madian From Unsorted Array
	*/
	const arr: number[] = [0, 1, 2, 4, 6, 5, 3];
	const sorted = arr.sort((a, b) => a - b);
	const result = sorted[Math.floor(sorted.length / 2)];
	console.log(result);
	return result;
};
