// only -> Only Test The Target One
const { sum, iterableSum } = require("../js");

describe("Submition Numbers", () => {
	describe.only("Use The Sum Function", () => {
		test.only("Empty For Zero", () => expect(sum()).toBe(0));
		test("One Number", () => expect(sum(10)).toBe(10));
		test("Two Numbers", () => expect(sum(10, 20)).toBe(30));
		test("Three Numbers", () => expect(sum(10, 20, 30)).toBe(60));
	});
	describe("Using Iterable Parameter", () => {
		test("Iterable Numbers", () => expect(iterableSum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)).toBe(550));
	});
});
