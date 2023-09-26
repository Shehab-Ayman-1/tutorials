"use strict";
/*
    Generics
    -- Help To Write A Rausable Code
    -- Allow To Pass Type As A Parameter To Other Type
    -- You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
    -- We Can Create:
    -- -- Generic Classes.
    -- -- Generic Functions.
    -- -- Generic Methods.
    -- -- Generic Interfaces.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneType = void 0;
function OneType() {
    const returnString = (val) => val;
    const returnNumber = (val) => val;
    const returnBoolean = (val) => val;
    const GenericTypes = (val) => val;
    console.log(returnString("shehab"));
    console.log(returnNumber(150));
    console.log(returnBoolean(true));
    console.log(GenericTypes(100));
}
exports.OneType = OneType;
//# sourceMappingURL=one-type.js.map