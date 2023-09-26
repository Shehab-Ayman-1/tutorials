"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = void 0;
function Arrays() {
    // let stArr: string[] = ["html | ", "css | ", "js | ", 100] // Invalue Array
    let stArr = ["html", "css", "js", "ts"];
    let numArr = [1, 2, 3, 4, 5];
    let stNumArr = ["string value", "number value"];
    let anyArr = ["name", 21, true, ["Nested Array", ["", "", 2, false]], { obj: "value" }];
    console.log(stArr, numArr, stNumArr, anyArr);
    let loopArr = ["html | ", "css | ", "js | "];
    loopArr.forEach((item) => console.log(item.repeat(3)));
}
exports.Arrays = Arrays;
//# sourceMappingURL=array.js.map