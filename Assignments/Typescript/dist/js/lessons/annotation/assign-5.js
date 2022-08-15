"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anno_Assign5 = void 0;
const Anno_Assign5 = () => {
    let nothing;
    let theName = "Elzero";
    function showMyDetails(a = "", b = "", c) {
        return `${a} ${b} ${c}`;
    }
    // Replace ???? With The Available Variables As Argument To Get The Result
    console.log(showMyDetails(theName, nothing, (nothing = ""))); // Elzero
};
exports.Anno_Assign5 = Anno_Assign5;
//# sourceMappingURL=assign-5.js.map