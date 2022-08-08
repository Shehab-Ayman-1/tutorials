"use strict";
/*
    readonly  => Can't Update This Property
    private   => Just Use In This Class
    protected => Just Use In The Subclasses
*/
Object.defineProperty(exports, "__esModule", { value: true });
function Modifiers() {
    class User {
        constructor(id, username, salary) {
            this.id = id;
            this.username = username;
            this.salary = salary;
            this.Power = (n) => n ** 2;
            this.msg = () => {
                return `ID: ${this.id}, username: ${this.username}, salary ${this.salary}`;
            };
        }
    }
    const user = new User(10, "shehab", 6000);
    // console.log(user.username); // Property 'username' is private and only accessible within class 'User'.
    // console.log(user.salary); // Property 'salary' is protected and only accessible within class 'User' and its subclasses.
    console.log(user.msg());
    console.log(user.Power(5));
}
exports.default = Modifiers;
//# sourceMappingURL=modifiers.js.map