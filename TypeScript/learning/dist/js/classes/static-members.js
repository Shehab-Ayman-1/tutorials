"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticMembers = void 0;
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
    const { username: u1 } = new User("shehab");
    const { username: u2 } = new User("hesham");
    const { username: u3 } = new User("aya");
    const { username: u4 } = new User("salma");
    const { username: u5 } = new User("wahed");
    console.table({ u1, u2, u3, u4, u5 });
    User.getCount();
}
exports.StaticMembers = StaticMembers;
//# sourceMappingURL=static-members.js.map