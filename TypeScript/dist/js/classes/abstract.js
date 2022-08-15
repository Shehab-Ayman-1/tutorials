"use strict";
/*
    Abstract
    -- We Can't Create An Instance From The Abstract Class
    -- Abstract Is Using To Make The Class Is Just For Inherits From The Other Classes
    -- The Abstracted Functions Make The Other Classes Have These Methods
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abstract = void 0;
function Abstract() {
    class Foods {
        constructor(title) {
            this.title = title;
        }
    }
    class Pizza extends Foods {
        constructor(title, price) {
            super(title);
            this.price = price;
            this.getFoodTime = () => console.log("Pizza Was Cooked At 1 Hour");
        }
    }
    class Burger extends Foods {
        constructor(title, price) {
            super(title);
            this.price = price;
            this.getFoodTime = () => console.log("Burger Was Cooked At 2 Hour");
        }
    }
    // const food = new Foods() // error => Cannot create an instance of an abstract class
    const pizza = new Pizza("Awasome Pizza", 100);
    const burger = new Burger("Awasome Burger", 150);
    console.log(pizza.title);
    console.log(burger.price);
    pizza.getFoodTime();
}
exports.Abstract = Abstract;
//# sourceMappingURL=abstract.js.map