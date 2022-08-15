"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalParameters = void 0;
function OptionalParameters() {
    // ? => Optional Parameter [ Have To Be In The Last Parameters ]
    function showUser(name, age, country = "egypt", isAvailable) {
        if (!isAvailable)
            return console.log("Sorry, This User Is Not Available");
        return `My Name: ${name}, Age: ${age}, Country: ${country}`;
    }
    showUser("shehab", 21, "egypt", true);
}
exports.OptionalParameters = OptionalParameters;
//# sourceMappingURL=optional-parameters.js.map