"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods = () => {
    const myUser = {
        id: 1,
        username: "shehab",
        skills: ["javascript", "typescript"],
        sayHello() {
            return `Hello ${this.username}`;
        },
        sayWelcome: () => `Welcone ${myUser.username}`,
        getPower: (n) => n ** 2,
    };
    // myUser.username = "aya"; // Cannot assign to 'username' because it is a read-only property.
    console.log(myUser);
    console.log(myUser.sayHello());
    console.log(myUser.sayWelcome());
    console.log(myUser.getPower(3));
};
exports.default = methods;
//# sourceMappingURL=methods.js.map