export const permutingTwoArrays = () => {
	/* 
      - We Have 2 Arrays Of Integars A And B, Permute Them To A`, B`, And K Is Variable Integar, And A[i] + B[i] >= K
      - There will be Q queries consisting of A, B, and K. For each query, return YES if some permutation A`, B` satisfying the relation exists. Otherwise, return NO.
   */
	let k: number = 1;
	let A: number[] = [0, 1];
	let B: number[] = [0, 2];

	let sortedA = A.sort((a, b) => a - b);
	let sortedB = B.sort((a, b) => b - a);

	let isAllPasses = sortedA.every((_, index) => sortedA[index] + sortedB[index] >= k);
	return isAllPasses ? "YES" : "NO";
};
