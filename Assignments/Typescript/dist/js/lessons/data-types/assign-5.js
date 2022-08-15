"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DT_Assign5 = void 0;
const DT_Assign5 = () => {
    function isHeOld(age) {
        if (typeof age !== "number")
            return "Error";
        if (age > 35) {
            return "Yes";
        }
        else if (age < 35) {
            return "No";
        }
        else {
            return "Error";
        }
    }
    // Do Not Edit Here
    console.log(isHeOld("100")); // Error
    console.log(isHeOld(45)); // "Yes"
    console.log(isHeOld(30)); // "No"
};
exports.DT_Assign5 = DT_Assign5;
//# sourceMappingURL=assign-5.js.map