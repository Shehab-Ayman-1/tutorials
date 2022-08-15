"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
function Literal() {
    const compare = (num1, num2) => {
        if (num1 === num2) {
            // return 4; // Type '4' is not assignable to type '0 | 1 | -1'.ts(2322)
            return 0;
        }
        else if (num1 > num2) {
            return 1;
        }
        else {
            return -1;
        }
    };
    console.log(compare(3, 3), compare(4, 3), compare(2, 3));
}
exports.Literal = Literal;
//# sourceMappingURL=literal.js.map