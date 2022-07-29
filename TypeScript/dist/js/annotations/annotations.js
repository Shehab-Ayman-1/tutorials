"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const annotations = () => {
    /* Variablts */
    let st = "Shehab";
    let num = 21;
    let bool = true;
    let cus = "My Age Is: " + 21;
    let any = "shehab" + 20 + true;
    let stArr = ["html", "css", "js", "ts"];
    let numArr = [1, 2, 3, 4, 5];
    let stNumArr = ["string value", "number value"];
    let anyArr = ["name", 21, true, ["Nested Array", ["", "", 2, false]], { obj: "value" }];
    // Can't Loop On Now Available Type
    let loopArr = ["html | ", "css | ", "js | "]; // Invalude Array ["html | ", "css | ", "js | ", 100]
    for (let val of loopArr) {
        console.log(val.repeat(3));
    }
};
exports.default = annotations;
//# sourceMappingURL=annotations.js.map