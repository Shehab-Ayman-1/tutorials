"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSet = void 0;
const GetSet = () => {
    class User {
        constructor(_username, _salary) {
            this._username = _username;
            this._salary = _salary;
            this.msg = () => `username: ${this._username}, salary: ${this._salary}`;
        }
        get username() {
            return this._username;
        }
        set newUsername(val) {
            this._username = val;
        }
    }
    const user = new User("shehab", 5000);
    user.newUsername = "hesham"; // set
    console.log(user.username); // get
    console.log(user.msg()); // get
};
exports.GetSet = GetSet;
//# sourceMappingURL=get-set.js.map