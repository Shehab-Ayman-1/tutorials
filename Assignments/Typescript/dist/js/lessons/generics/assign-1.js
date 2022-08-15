"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generic_Assign1 = void 0;
const Generic_Assign1 = () => {
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
exports.Generic_Assign1 = Generic_Assign1;
//# sourceMappingURL=assign-1.js.map