"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StaticMembers() {
    class User {
        constructor(username) {
            this.username = username;
            User.created++;
        }
        static getCount() {
            console.log(`${this.created} Objects Was Created`);
        }
    }
    User.created = 0;
    const u1 = new User("shehab");
    const u2 = new User("hesham");
    const u3 = new User("aya");
    const u4 = new User("salma");
    const u5 = new User("wahed");
    console.log(u1.username);
    console.log(u2.username);
    console.log(u3.username);
    console.log(u4.username);
    console.log(u5.username);
    User.getCount();
}
exports.default = StaticMembers;
//# sourceMappingURL=static-members.js.map