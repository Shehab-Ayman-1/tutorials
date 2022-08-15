"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign5 = void 0;
const Class_Assign5 = () => {
    class Game {
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }
    }
    // Start Edit And Fix
    class RPG extends Game {
        constructor(title, price, rate) {
            super(title, price);
            this.price = price;
            this.rate = rate;
        }
        getLocation() {
            return "Awasome Location";
        }
        getDiscount() {
            return "Awasome Discount";
        }
    }
    class Action extends Game {
        constructor(title, price, rate, company) {
            super(title, price);
            this.price = price;
            this.rate = rate;
            this.company = company;
        }
        getLocation() {
            return "Awasome Location";
        }
        getDiscount() {
            return "Awasome Discount";
        }
    }
    // End Edit And Fix
    // Do Not Edit
    let gameOne = new RPG("Ys", 100, 10);
    let gameTwo = new Action("Uncharted", 90, 15, "Sony");
    console.log(gameOne.title); // "Ys"
    console.log(gameOne.price); // 100
    console.log(gameOne.rate); // 10
    console.log(gameOne.getDiscount()); // "Discount"
    console.log(gameOne.getLocation()); // "Location"
    console.log(gameTwo.title); // "Uncharted"
    console.log(gameTwo.price); // 90
    console.log(gameTwo.rate); // 15
    console.log(gameTwo.company); // "Sony"
    console.log(gameTwo.getDiscount()); // "Discount"
    console.log(gameTwo.getLocation()); // "Location"
};
exports.Class_Assign5 = Class_Assign5;
//# sourceMappingURL=assign-5.js.map