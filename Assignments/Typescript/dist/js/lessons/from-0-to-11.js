"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anno_Assign7 = exports.Anno_Assign6 = exports.Anno_Assign5 = exports.Anno_Assign4 = exports.Anno_Assign3 = exports.Anno_Assign2 = exports.Anno_Assign1 = void 0;
const Anno_Assign1 = () => {
    function calculate(numOne, numTwo) {
        return numOne + numTwo;
    }
    console.log(calculate(10, 20)); // 30
    // console.log(calculate("10", "20")); // We Don't Need This To Work => Error
    console.log(calculate(+true, +true)); // 2
};
exports.Anno_Assign1 = Anno_Assign1;
const Anno_Assign2 = () => {
    function printInfo(valueOne, valueTwo) {
        return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
    }
    console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
    console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
    // console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work => error
};
exports.Anno_Assign2 = Anno_Assign2;
const Anno_Assign3 = () => {
    let arr = [];
    arr.push(21, [true, false], ["shehab", ["hesham", 21]]);
};
exports.Anno_Assign3 = Anno_Assign3;
const Anno_Assign4 = () => {
    /*
        Assignment
        -- Edit The tsconfig.json To Ignore The Paramater Annotation
        -- Edit The tsconfig.json To Warning Us When Using Unused Variables
        -- Edit The tsconfig.json To Warning Us When Using Unused Paramenters
        -- Edit The tsconfig.json To Warning Us When Using UnreachableCode
    */
    function reportErrors(username, age) {
        // let rank = "Professor"; // Unused
        return `Username: ${username}, age: ${age}`;
        // console.log("We Will Not Reach Here"); // Unused
    }
    console.log(reportErrors("Elzero", 40));
};
exports.Anno_Assign4 = Anno_Assign4;
const Anno_Assign5 = () => {
    let nothing;
    let theName = "Elzero";
    function showMyDetails(a = "", b = "", c) {
        return `${a} ${b} ${c}`;
    }
    // Replace ???? With The Available Variables As Argument To Get The Result
    console.log(showMyDetails(theName, nothing, (nothing = ""))); // Elzero
};
exports.Anno_Assign5 = Anno_Assign5;
const Anno_Assign6 = () => {
    function showMsg(user, age, country) {
        return `${user} ${age} ${country}`;
    }
    console.log(showMsg());
    console.log(showMsg("Elzero"));
    console.log(showMsg("Elzero", 40));
    console.log(showMsg("Elzero", "40", "Egypt"));
};
exports.Anno_Assign6 = Anno_Assign6;
const Anno_Assign7 = () => {
    // Write The Function Here
    const printInConsole = (...inputs) => {
        inputs.forEach((item) => console.log(`The Value Is ${item}, And The Type Is ${typeof item}`));
        return "Done";
    };
    // Using The Function => Do Not Edit
    console.log(printInConsole("A", "B", "C"));
    console.log(printInConsole(1, 2, 3, 4, 5));
    console.log(printInConsole(true, false, false, true, true));
    console.log(printInConsole("A", 1, true, "B", 2, false));
};
exports.Anno_Assign7 = Anno_Assign7;
//# sourceMappingURL=from-0-to-11.js.map