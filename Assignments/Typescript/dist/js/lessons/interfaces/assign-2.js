"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface_Assign2 = void 0;
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
//# sourceMappingURL=assign-2.js.map