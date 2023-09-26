"use strict";
/*
    Union & InterSection
    -- Can To Compine More Types Without Any Extend
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intersections = void 0;
function Intersections() {
    const getActions = (btns) => `One: ${btns.one}, Two: ${btns.two}`;
    console.log(getActions({ one: "arrow up", two: "arrow down" }));
}
exports.Intersections = Intersections;
//# sourceMappingURL=intersections.js.map