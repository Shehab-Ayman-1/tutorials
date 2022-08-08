"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArrowFunction() {
    const showDetails = (name, age, salary) => {
        if (false)
            return "SomeThing, Has An Error !";
        return `Hello: ${name}, Age: ${age}, Salary: ${salary}`;
    };
    showDetails("shehab", 21, 5000);
}
exports.default = ArrowFunction;
//# sourceMappingURL=arrow-function.js.map