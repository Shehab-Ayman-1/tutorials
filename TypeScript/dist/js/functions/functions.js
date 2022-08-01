"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions = () => {
    /* Annotations In Functions */
    // In Js, Maybe The User Enter String So The Compiler Will Concatenat The Value Not Sum Them
    function sum(num1, num2) {
        return num1 + num2;
    }
    sum(1, 2);
    /* Arrow Functions */
    const showDetails = (name, age, salary) => {
        if (false)
            return "SomeThing, Has An Error !";
        return `Hello: ${name}, Age: ${age}, Salary: ${salary}`;
    };
    showDetails("shehab", 21, 5000);
    /* Options Parameters */
    // ? => Optional Parameter [ Have To Be In The Last Parameters ]
    function showUser(name, age, country = "egypt", isAvailable) {
        if (!isAvailable)
            return console.log("Sorry, This User Is Not Available");
        return `My Name: ${name}, Age: ${age}, Country: ${country}`;
    }
    showUser("shehab", 21, "egypt", true);
    /* Rest Parameters */
    function restParams(...nums) {
        let result = 0;
        for (let num of nums) {
            result += num;
        }
        return result;
    }
    console.log("Rest Parameters => ", restParams(1, 2, 3, 4, 5, 6, 7, 8, 9));
};
exports.default = Functions;
//# sourceMappingURL=functions.js.map