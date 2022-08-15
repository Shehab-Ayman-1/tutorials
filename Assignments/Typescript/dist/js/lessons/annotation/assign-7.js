"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anno_Assign7 = void 0;
const Anno_Assign7 = () => {
    // Write The Function Here
    const printInConsole = (...inputs) => {
        let arr = [];
        inputs.forEach((item) => arr.push(`The Value Is ${item}, And The Type Is ${typeof item}`));
        console.table(Object.assign({}, arr));
        return "Done";
    };
    // Using The Function => Do Not Edit
    console.log(printInConsole("A", "B", "C"));
    console.log(printInConsole(1, 2, 3, 4, 5));
    console.log(printInConsole(true, false, false, true, true));
    console.log(printInConsole("A", 1, true, "B", 2, false));
};
exports.Anno_Assign7 = Anno_Assign7;
//# sourceMappingURL=assign-7.js.map