// Test -> Is Using To Test The Functions
const { sayHello, sum, iterableSum } = require("../js");

test("test say function by jest", () => expect(sayHello()).toBe("Hello Jest"));

test("submition the numbers value 1", () => expect(sum()).toBe(0));

test("submition the numbers value 2", () => expect(sum(10)).toBe(10));

test("submition the numbers value 3", () => expect(sum(10, 20)).toBe(30));

test("submition the numbers value 4", () => expect(sum(10, 20, 30)).toBe(60));

test("submition the Iterable Parameters", () => expect(iterableSum(10, 20, 20)).toBe(50));
