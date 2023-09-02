export const plusMinus = (): void => {
	// Write your code here
	const arr: number[] = [-4, 3, -9, 0, 4, 1];
	const arrLength = arr.length;

	const postive = arr.filter((num) => num > 0).length;
	const negative = arr.filter((num) => num < 0).length;
	const zero = arr.filter((num) => num === 0).length;

	console.log((postive / arrLength).toFixed(6));
	console.log((negative / arrLength).toFixed(6));
	console.log((zero / arrLength).toFixed(6));
};

export const miniMaxSum = (): void => {
	// Write your code here
	const arr: number[] = [1, 2, 3, 4, 5];
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

	console.log(minimum, maximum);
};

export const timeConversion = (): string => {
	// Write your code here
	const s: string = "07:05:45PM";
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

	return "something is missing";
};

export const breakingRecords = (): number[] => {
	// Write your code here
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

export const camelCase4 = (): string | string[] => {
	// Enter your code here
	const words = ["S;V;iPad", "C;M;mouse pad", "C;C;code swarm", "S;C;OrangeHighlighter", "C;V;can of coke", "S;M;sweatTea()", "S;V;epsonPrinter", "C;M;santa claus", "C;C;mirror"];
	let result: string | string[] = "";

	words.forEach((_word) => {
		let [cond, type, word] = _word.split(";");

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
	});

	return result;
};

export const divisibleSumPairs = (): number => {
	// Write your code here
	let n: number = 15;
	let k: number = 5;
	let ar: number[] = [];
	let result: number = 0;

	for (let i = 0; i < n + 1; i++) {
		for (let j = 1; j < n; j++) {
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

export const matchingStrings = (): number[] => {
	// Write your code here
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
