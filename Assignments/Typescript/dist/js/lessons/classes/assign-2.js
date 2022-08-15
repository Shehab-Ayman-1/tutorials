"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign2 = void 0;
const Class_Assign2 = () => {
    class Shorten {
        constructor(id, username, title) {
            this.id = id;
            this.username = username;
            this.title = title;
        }
    }
    let tester = new Shorten(100, "Elzero", "Developer");
    console.table({ id: tester.id, username: tester.username });
};
exports.Class_Assign2 = Class_Assign2;
//# sourceMappingURL=assign-2.js.map