"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polimorphism = void 0;
function Polimorphism() {
    class Player {
        constructor(name) {
            this.name = name;
        }
        attack() {
            console.log("Attacking Now...");
        }
    }
    class Amazon extends Player {
        constructor(name, spears) {
            super(name);
            this.spears = spears;
        }
        attack() {
            // super.attack();
            this.spears -= 1;
            console.log("Amazon Using Spear");
        }
    }
    class Burberian extends Player {
        constructor(name, axeDurability) {
            super(name);
            this.axeDurability = axeDurability;
        }
        attack() {
            // super.attack();
            this.axeDurability -= 1;
            console.log("Burbarian Using Axe");
        }
    }
    const burbarian = new Burberian("shehab", 500);
    const amazon = new Amazon("hesham", 200);
    burbarian.attack();
    console.log(burbarian.axeDurability);
    amazon.attack();
    console.log(amazon.spears);
    burbarian.attack();
    console.log(burbarian.axeDurability);
    amazon.attack();
    console.log(amazon.spears);
}
exports.Polimorphism = Polimorphism;
//# sourceMappingURL=polimorphism.js.map