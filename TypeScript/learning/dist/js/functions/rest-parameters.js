"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestParameters = void 0;
function RestParameters() {
    function restParams(...nums) {
        let result = 0;
        nums.forEach((num) => (result += num));
        return result;
    }
    console.log("Rest Parameters => ", restParams(1, 2, 3, 4, 5, 6, 7, 8, 9));
}
exports.RestParameters = RestParameters;
//# sourceMappingURL=rest-parameters.js.map