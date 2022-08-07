"use strict";
/*
    Void
    -- Void Function => Have To Return An Undefined Value
    Never
    -- Never Function => Have To Return No Thing => No Value And No Undefined => No Thing
*/
Object.defineProperty(exports, "__esModule", { value: true });
function VoidAndNever() {
    // Void
    const login = (msg) => {
        console.log(msg);
        // return msg // Type 'string' is not assignable to type 'void'
    };
    console.log(login("Void => This Function Have To Return Undefined Value"));
    // Never
    const failur = (msg) => {
        throw new Error(msg); // This Code Line Has An Infinity Loop, So That The Next Lines Will Be Unreachable code detected
        const age = 0; // Unreachable code detected
        console.log(age); // Unreachable code detected
    };
    console.log(failur("Never => This Function Not Return Any Thing No Undefined And No Value"));
    const alwaysReturn = (msg) => {
        while (true) {
            console.log(msg);
            // return msg; // Can't Return Any Type In Never DataType Method
        }
    };
    alwaysReturn("msg");
}
exports.default = VoidAndNever;
//# sourceMappingURL=void-never.js.map