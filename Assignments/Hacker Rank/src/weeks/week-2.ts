export const mockTest2 = (): number => {
	/* Flipping The Matrix
      - Imagin The Matrix Like The Rubics Cube, And We Want To Flipping It
      - After Each Time The Flipping Is Happen, We Just Flipping The Edges Of The Cube
      - So If We Find The Maximum Edge In All The Matrix Edges, We Will Find The Maximum Value Of Sum Possible
   */
	let matrix: number[][] = [
		[112, 42, 83, 119],
		[56, 125, 56, 49],
		[15, 78, 101, 43],
		[62, 98, 114, 108],
	];

	let _matrix: number[][] = [
		[107, 54, 128, 15],
		[12, 75, 110, 138],
		[100, 96, 34, 85],
		[75, 15, 28, 112],
	];

	let len: number = matrix.length / 2;
	let result: number = 0;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			result += Math.max(
				matrix[i][j], // top left
				matrix[i][2 * len - j - 1], // top right
				matrix[2 * len - i - 1][j], // bottom left
				matrix[2 * len - i - 1][2 * len - j - 1] // bottom right
			);
		}
	}
	console.log(result);
	return result;
};
