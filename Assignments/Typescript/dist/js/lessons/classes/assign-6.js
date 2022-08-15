"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign6 = void 0;
const Class_Assign6 = () => {
    // Write Function Code Here
    function showTypes(val1, val2, val3) {
        return `${val1 || "Nothing"} - ${val2 || "Nothing"} - ${val3 || "Nothing"}`;
    }
    // Do Not Edit Here
    console.log(showTypes()); // Nothing - Nothing - Nothing
    console.log(showTypes("String")); // String - Nothing - Nothing
    console.log(showTypes("String", 100)); // String - 100 - Nothing
    console.log(showTypes("String", 100, true)); // String - 100 - true
};
exports.Class_Assign6 = Class_Assign6;
//# sourceMappingURL=assign-6.js.map