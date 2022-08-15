"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classes = void 0;
function Classes() {
    // genType => Is A String As A Default Type
    class User {
        constructor(val) {
            this.val = val;
        }
        show(msg) {
            console.log(`${msg} - ${this.val}`);
        }
    }
    const user1 = new User("shehab");
    user1.show("My Name Is");
    console.log(user1.val);
    const user2 = new User(100);
    // user2.show("My Name Is"); // Argument of type 'string' is not assignable to parameter of type 'number'.
    console.log(user2.val);
    const user3 = new User(true);
    user3.show("Is Available");
    console.log(user3.val);
}
exports.Classes = Classes;
//# sourceMappingURL=classes.js.map