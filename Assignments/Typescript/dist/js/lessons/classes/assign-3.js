"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign3 = void 0;
const Class_Assign3 = () => {
    class Show {
        constructor(_title) {
            this._title = _title;
        }
        get title() {
            return this._title;
        }
        set title(val) {
            this._title = val;
        }
    }
    let tester = new Show("Osama");
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
    tester.title = "Elzero"; // Property 'title' does not exist on type 'Show'
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
};
exports.Class_Assign3 = Class_Assign3;
//# sourceMappingURL=assign-3.js.map