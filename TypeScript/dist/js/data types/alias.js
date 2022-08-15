"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = void 0;
function Alias() {
    let name = "shehab";
    let age = 21;
    let isAvailable = true;
    let Mix = `My Name Is: [ ${name} ], Age: [ ${age} ], is Available: [ ${isAvailable} ]`;
    console.log(Mix);
    function move1(btns) {
        console.log(`Up Key => ${btns.up}`);
        console.log(`Bottom Key => ${btns.bottom}`);
        console.log(`Right Key => ${btns.right}`);
        console.log(`Left Key => ${btns.left}`);
    }
    move1({ up: "Go Up", bottom: "Go Down", right: "Go Right", left: "Go Left" });
    function move2(btns) {
        console.log(`Up Key => ${btns.up}`);
        console.log(`Bottom Key => ${btns.bottom}`);
        console.log(`Right Key => ${btns.right}`);
        console.log(`Left Key => ${btns.left}`);
        console.log(`Space Key => ${btns.space}`);
    }
    move2({ up: "Go Up", bottom: "Go Down", right: "Go Right", left: "Go Left", space: "Jump" });
}
exports.Alias = Alias;
//# sourceMappingURL=alias.js.map