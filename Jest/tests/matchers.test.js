/* Matchers:
	[1] Built In:
		- toBe -> Matching The Content
		- toHaveLength -> Matching The Length
		- toContain -> Matching Element
		- Not -> Reverse
		- toBeTruthy, toBeFalsy -> Matching Condision
		- toBeGreaterThan, toBeGreaterThanOrEqual -> Matching Condision
		- toBeLessThan, toBeLessThanOrEqual -> Matching Condision
		- toBeUndefined -> Check For Undefined Value
		- toMatch -> Use Regular Expression
		- toHaveProperty -> Check To The Property Key & Value

    [2] toEqual:
		- anything -> Anything But Reject Undefined, And Null
		- any -> Check To The Constructor

	[3] Mockers:
		- toBeCalled -> Check If It Is Called
		- toBeCalledWith -> Check If It Is Called With <parameter>
		- toReturnTimes -> Check The Number Of Called Times
		- lastCalledWith -> Check The Last Call

    [4] Custome Matcher:
		- Create A Custome Matcher
*/
const { arr } = require("../js");

describe("built In Matchers", () => {
	describe("Direct", () => {
		describe("toBe", () => {
			test("Is Match", () => expect(arr.length).toBe(6));
		});
		describe("toHaveLength", () => {
			test("Is The Same Length", () => expect(arr).toHaveLength(6));
		});
		describe("toContain", () => {
			test("Is Contain", () => expect(arr).toContain(3));
		});
		describe("Not", () => {
			test("Is Not Contain 1st Way", () => expect(arr).not.toContain(30));
			test("Is Not Contain 2nd Way", () => {
				for (let i of arr) expect(i).not.toBe(30);
			});
		});
		describe("toBeFalsy", () => {
			for (let i of arr) test("Is False", () => expect(isNaN(i)).toBeFalsy());
		});
		describe("toBeTruthy", () => {
			for (let i of arr) test("Is True", () => expect(i).toBeTruthy());
		});
		describe("toBeGreater", () => {
			for (let i of arr) test("Is Greater Than Or Equal", () => expect(i).toBeGreaterThan(0));
		});
		describe("toBeLessThanOrEqual", () => {
			for (let i of arr) test("Is Less Than Or Equal", () => expect(i).toBeLessThanOrEqual(10));
		});
		describe("toBeUndefined", () => {
			let a = undefined;
			test("Is undefined", () => expect(a).toBeUndefined());
		});
		describe("toMatch", () => {
			let a = "shehab ayman awad";
			test("Is Matching", () => expect(a).toMatch(/ayman/g));
			test("Is Matching", () => expect(a).toMatch("aym"));
		});
		describe("toHaveProperty", () => {
			let a = { name: "shehab", age: 23 };
			test("Is Matching", () => expect(a).toHaveProperty("name"));
			test("Is Matching", () => expect(a).toHaveProperty("age", 23));
		});
	});

	describe("To Equal", () => {
		describe("anything", () => {
			let a = "Examples -> " || "string" || "array" || "object" || "boolean";
			test("Expect anything", () => expect(a).toEqual(expect.anything()));
			test("Expect anything", () => expect([1, "a", { b: "" }, false]).toEqual(expect.anything()));
		});
		describe("any By Constructor", () => {
			test("Expect Constructor", () => expect("10").toEqual(expect.any(String)));
			test("Expect Constructor", () => expect(10).toEqual(expect.any(Number)));
			test("Expect Constructor", () => expect(false).toEqual(expect.any(Boolean)));
		});
		describe("Array Is Containing", () => {
			test("Expect Constructor", () => expect(arr).toEqual(expect.arrayContaining([1, 4])));
		});
	});

	describe("Mocker", () => {
		let mocker = jest.fn((name) => `Hello -> ${name}`);

		test("test Mocker Functions", () => {
			expect(mocker("Ahmed")).toBe("Hello -> Ahmed");
			expect(mocker("Mohamed")).toBe("Hello -> Mohamed");
			expect(mocker("Mostafa")).toBe("Hello -> Mostafa");

			expect(mocker).toBeCalled();
			expect(mocker).toReturnTimes(3);
			expect(mocker).toBeCalledWith("Mohamed");
			expect(mocker).lastCalledWith("Mostafa");
		});
	});
});

describe("Custome Matchers", () => {
	// expect(recieved).matcher(target)
	// expect(recieved).matcher(start, end)
	expect.extend({
		isMatching: (recieved, target) => {
			let pass = recieved === target;
			if (pass) return { message: () => `Expected [${recieved}] Is Equal [${target}]`, pass: true };
			else return { message: () => `Error: Expected [${recieved}] Is Not Equal [${target}]`, pass: false };
		},
		isStartsWith: (recieved, target) => {
			return recieved.startsWith(target) ? { message: () => "Success", pass: true } : { message: () => "Failur", pass: false };
		},
		isBetween: (recieved, start, end) => {
			return recieved > start && recieved < end ? { message: () => "Success", pass: true } : { message: () => "Failur", pass: false };
		},
	});
	test("Is Matching", () => expect(arr[0]).isMatching(1));
	test("Is Starts With", () => expect("shehab ayman awad").isStartsWith("s"));
	test("Is Between", () => expect(1500).isBetween(1000, 2000));
});
