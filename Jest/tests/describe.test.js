// Describe -> Is Using To Sorting The Tests
const { sayHello, sum, iterableSum, inputValidate } = require("../js");

describe("Say Message", () => {
	test("Say Hello", () => expect(sayHello()).toBe("Hello Jest"));
	test("Say Name", () => expect(sayHello("shehab")).toBe("Name Is: shehab"));
	test("Say Age", () => expect(sayHello(21)).toBe("Age Is: 21"));
});

describe("Submition Numbers", () => {
	describe("Use The Sum Function", () => {
		test("Empty For Zero", () => expect(sum()).toBe(0));
		test("One Number", () => expect(sum(10)).toBe(10));
		test("Two Numbers", () => expect(sum(10, 20)).toBe(30));
		test("Three Numbers", () => expect(sum(10, 20, 30)).toBe(60));
	});
	describe("Using Iterable Parameter", () => {
		test("Iterable Numbers", () => expect(iterableSum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)).toBe(550));
	});
});

describe("Check The Input Validation", () => {
	test("Input Is Empty", () => expect(inputValidate()).toBe("unknown"));
	test("Input Has The Name", () => expect(inputValidate("shehab")).toBe("shehab"));
	test("Input Has start Whitespace", () => expect(inputValidate(" shehab")).toBe("shehab"));
	test("Input Has end Whitespace", () => expect(inputValidate("shehab ")).toBe("shehab"));
	test("Input Has around Whitespace", () => expect(inputValidate(" shehab ")).toBe("shehab"));
	test("Slice The First 10 Letters", () => expect(inputValidate("shehab ayman awad ali")).toBe("shehab aym..."));
	test("Recieve The Currect Characters", () => expect(inputValidate("__S$H#E@HAB__")).toBe("shehab"));
});
