"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleType = void 0;
function MultipleType() {
    const GenType = (val1, val2) => {
        return `The First Value Is ${val1}, And The Second Value Is ${val2}`;
    };
    console.log(GenType("shehab", 150)); // GenType: <string, number>(val1: string, val2: number) => string
    console.log(GenType("shehab", 150));
    console.log(GenType("shehab", false));
}
exports.MultipleType = MultipleType;
//# sourceMappingURL=multiple-type.js.map