"use strict";
/*
    Assertions
    -- The Default Assertions For All The Document Is HTMLElement
    -- The Ts Compiler Doesn't Check Any Thing After We Use As To Select The Type
*/
Object.defineProperty(exports, "__esModule", { value: true });
function Assertions() {
    const img = document.getElementById("img");
    // console.log(img.value); // Image Can't Has Value As An Attribute
    console.log(img.src); // image src
    const input = document.getElementById("input");
    // console.log(input.href); // Input Can't Has Href As An Attribute
    console.log(input.value);
    // The Compiler Doesn't Check The Code That Has An As [ Type ]
    const age = 21.54321;
    console.log(age.repeat(3)); // Error => Compiler Doesn't Check If Age Value Is A String OR Number
}
exports.default = Assertions;
//# sourceMappingURL=assertions.js.map