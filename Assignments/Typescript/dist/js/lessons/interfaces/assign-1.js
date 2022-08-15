"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface_Assign1 = void 0;
const Interface_Assign1 = () => {
    // Do Not Edit The Code Below
    let user = {
        // Property 'country' is missing in type
        id: 100,
        username: "Elzero",
        state: true,
        getName() {
            // 'getName' does not exist in type 'Member'
            return this.username;
        },
    };
    user.id = 200;
    user.id = "200"; // Type 'string' is not assignable to type 'number'
    user.state = false; // Cannot assign to 'state' because it is a read-only property
};
exports.Interface_Assign1 = Interface_Assign1;
//# sourceMappingURL=assign-1.js.map