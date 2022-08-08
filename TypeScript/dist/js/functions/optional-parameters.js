"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function OptionalParameters() {
    // ? => Optional Parameter [ Have To Be In The Last Parameters ]
    function showUser(name, age, country = "egypt", isAvailable) {
        if (!isAvailable)
            return console.log("Sorry, This User Is Not Available");
        return `My Name: ${name}, Age: ${age}, Country: ${country}`;
    }
    showUser("shehab", 21, "egypt", true);
}
exports.default = OptionalParameters;
//# sourceMappingURL=optional-parameters.js.map