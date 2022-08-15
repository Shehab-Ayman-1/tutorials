"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DT_Assign6 = void 0;
const DT_Assign6 = () => {
    // const post: [number, string, boolean] = [100, 200, "Title"]; // Error
    // const post: [number, string, boolean] = ["Title", 100, true]; // Error
    const post = [100, "Title", true]; // Good
    // post.push("Elzero"); // Error => Cant Add
    // Create Destructuring Here
    const [id, title, state] = post;
    // Do Not Edit Here
    console.table({ id, title, state }); // 100, Title, true
};
exports.DT_Assign6 = DT_Assign6;
//# sourceMappingURL=assign-6.js.map