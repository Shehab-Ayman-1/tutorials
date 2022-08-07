"use strict";
/*
    Enums
    -- We Have Multible Types Of Enums
    ----- [1] Numeric Enums [Numbers]
    ----- [2] String Based Enums [String]
    ----- [3] Heterogeneous Enums [String, Number]
    -- Start From 0 As A Default, Then 1, 2, 3, 4, 5, ...
    -- Can Set The Key Number
*/
Object.defineProperty(exports, "__esModule", { value: true });
function Enums() {
    const getHardSeconds = () => 6;
    let levels;
    (function (levels) {
        levels[levels["zero"] = 0] = "zero";
        levels[levels["one"] = 1] = "one";
        levels[levels["five"] = 5] = "five";
        levels[levels["six"] = 6] = "six";
        levels[levels["babeKid"] = 7] = "babeKid";
        levels[levels["youngKid"] = 16] = "youngKid";
        levels[levels["kids"] = 15] = "kids";
        levels[levels["easy"] = 12] = "easy";
        levels[levels["medium"] = 9] = "medium";
        levels[levels["hard"] = getHardSeconds()] = "hard";
    })(levels || (levels = {}));
    let lvl = "hard";
    if (lvl === "kids") {
        console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.kids} ] To Write This Word`);
    }
    else if (lvl === "easy") {
        console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.easy} ] To Write This Word`);
    }
    else if (lvl === "medium") {
        console.log(`Player Level Is [ ${lvl} ], You Have Just [ ${levels.medium} ] To Write This Word`);
    }
}
exports.default = Enums;
//# sourceMappingURL=enums.js.map