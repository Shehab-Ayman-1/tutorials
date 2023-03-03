export const swapping = () => {
	// [1] The First Way
	let x = 15;
	let y = 5;
	[x, y] = [y, x];

	// [2] The Second Way
	let a = 15;
	let b = 5;
	let c = a;
	a = b;
	b = c;

	// [3] The Third Way
	let j = 15;
	let k = 5;
	j -= k;
	k += j;
	j = k - j;

	console.table({ distructer: `x = ${x} | y = ${y}`, addition_Var: `a = ${a} | b = ${b}`, numaric: `j = ${j} | k = ${k}` });
};
