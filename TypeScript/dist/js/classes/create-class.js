"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClass = void 0;
function CreateClass() {
    class User {
        constructor(username, salary) {
            this.Power = (n) => n ** 2;
            this.user = username;
            this.sal = salary;
            this.msg = () => `Welcome ${this.user}`;
        }
    }
    const user = new User("shehab", 6000);
    console.log(user.user);
    console.log(user.sal);
    console.log(user.msg());
    console.log(user.Power(5));
}
exports.CreateClass = CreateClass;
//# sourceMappingURL=create-class.js.map