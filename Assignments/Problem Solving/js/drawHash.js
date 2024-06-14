export const drawHash = () => {
	let hash1 = "";
	for (let i = 0; i < 5; i++) {
		hash1 += "#";
		console.log(hash1);
	}

	console.log("====".repeat(15));

	let hash2 = "#####";
	for (let i = 1; i < 5; i++) {
		hash2 = hash2.slice(1);
		console.log(hash2);
	}

	console.log("====".repeat(15));

	let hash3 = ["#", "#", "#", "#", "#", "#"];
	for (let i = 0; i < 5; i++) {
		hash3[i] = "";
		console.log(hash3.join(" "));
	}

	console.log("====".repeat(15));

	let hash4 = ["#", "#", "#", "#", "#", "#"];
	for (let i = 2; i < 5; i++) {
		hash4[i] = "";
		console.log(hash4.join(" "));
	}
};
