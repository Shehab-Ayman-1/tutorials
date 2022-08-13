"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface_Assign3 = exports.Interface_Assign2 = exports.Interface_Assign1 = void 0;
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
const Interface_Assign2 = () => {
    // Do Not Edit The Code Below
    let client = {
        id: 100,
        username: "Elzero",
        active: true,
        discount: 10,
        getPrice(price) {
            return price - this.discount;
        },
    };
    console.log(`Client Id Is ${client.id}`);
    console.log(`Client Name Is ${client.username}`);
    console.log(`Client Has Dicount ${client.discount}`);
    console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
};
exports.Interface_Assign2 = Interface_Assign2;
const Interface_Assign3 = () => {
    let creature = {
        title: "Superman",
        weight: 100,
        age: 500,
        canFly: true,
        bodyType: "Iron",
        origin: "Krypton",
    };
    console.table(creature);
};
exports.Interface_Assign3 = Interface_Assign3;
//# sourceMappingURL=interface.js.map