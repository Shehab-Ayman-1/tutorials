"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign4 = void 0;
const Class_Assign4 = () => {
    // Create Your Class Here
    class Player {
        constructor(id, title, level) {
            this.id = id;
            this.title = title;
            this.level = level;
        }
        logIn() {
            return "Logged In";
        }
        logOut(val) {
            return `Logged Out, ${val}`;
        }
    }
    let { id, title, level, logIn, logOut } = new Player(100, "Elzero", 95);
    console.table({ id, title, level, login: logIn(), logout: logOut("Good Bye") }); // 100, ELzero, 95, Logged In, Logged Out Good Bye
};
exports.Class_Assign4 = Class_Assign4;
//# sourceMappingURL=assign-4.js.map