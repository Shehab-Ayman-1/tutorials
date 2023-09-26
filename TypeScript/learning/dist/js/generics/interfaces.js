"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interfaces = void 0;
function Interfaces() {
    class Collection {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
    }
    const collection1 = new Collection();
    collection1.addItem({ item: "Book", title: "Atomic Habits", isbn: 15051 });
    collection1.addItem({ item: "Book", title: "Follow Your Heart", isbn: 650365 });
    collection1.addItem({ item: "Book", title: "One Hour In The Day", isbn: 22315 });
    console.log(collection1);
    const collection2 = new Collection();
    collection2.addItem({ item: "Game", title: "Conquar", style: "Fantacy", price: 150 });
    collection2.addItem({ item: "Game", title: "Crossfire", style: "Action", price: 250 });
    collection2.addItem({ item: "Game", title: "S4", style: "Action", price: 450 });
    console.log(collection2);
}
exports.Interfaces = Interfaces;
//# sourceMappingURL=interfaces.js.map