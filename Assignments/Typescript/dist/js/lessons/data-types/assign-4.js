"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DT_Assign4 = void 0;
const DT_Assign4 = () => {
    // Write Your Code Here
    function yesOrNo(val) {
        if (typeof val !== "number")
            return "Error";
        return val > 10 ? true : val < 10 ? false : "Error";
    }
    // Do Not Edit Here
    console.log(yesOrNo("100")); // Error
    console.log(yesOrNo(30)); // True
    console.log(yesOrNo(8)); // False
};
exports.DT_Assign4 = DT_Assign4;
//# sourceMappingURL=assign-4.js.map