"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DT_Assign7 = void 0;
const DT_Assign7 = () => {
    // Create Enums + Function Here
    const GetInsane = (n) => n;
    let Game;
    (function (Game) {
        Game[Game["Easy"] = 100] = "Easy";
        Game[Game["Medium"] = 80] = "Medium";
        Game[Game["Hard"] = 30] = "Hard";
        Game[Game["Insane"] = Game.Hard - GetInsane(10)] = "Insane";
    })(Game || (Game = {}));
    // Output
    console.table(Game); // 100, 80, 30, 20
};
exports.DT_Assign7 = DT_Assign7;
//# sourceMappingURL=assign-7.js.map