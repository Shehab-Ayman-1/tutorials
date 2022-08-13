"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DT_Assign8 = exports.DT_Assign7 = exports.DT_Assign6 = exports.DT_Assign5 = exports.DT_Assign4 = exports.DT_Assign3 = exports.DT_Assign2 = exports.DT_Assign1 = void 0;
const DT_Assign1 = () => {
    // Do Not Edit Here
    let myData;
    myData = 1000; // No Problem Here
    myData = +true; // No Problem Here
    console.log(myData);
};
exports.DT_Assign1 = DT_Assign1;
const DT_Assign2 = () => {
    // Do Not Edit Here
    let myInfo;
    myInfo = 1000; // No Problem Here
    myInfo = true; // No Problem Here
    console.log(myInfo);
};
exports.DT_Assign2 = DT_Assign2;
const DT_Assign3 = () => {
    // Do Not Edit Here
    function showInfo(data) {
        console.table(data);
    }
    showInfo({ theName: "Elzero", theAge: 40 });
    function showFullInfo(data) {
        console.table(data);
    }
    showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" });
};
exports.DT_Assign3 = DT_Assign3;
const DT_Assign4 = () => {
    // Write Your Code Here
    function yesOrNo(val) {
        if (typeof val !== "number")
            return "Error";
        return val > 10 ? true : val < 10 ? false : "Error";
    }
    // Do Not Edit Here
    console.log(yesOrNo("100")); // Error
    console.log(yesOrNo(30)); // True
    console.log(yesOrNo(8)); // False
};
exports.DT_Assign4 = DT_Assign4;
const DT_Assign5 = () => {
    function isHeOld(age) {
        if (typeof age !== "number")
            return "Error";
        if (age > 35) {
            return "Yes";
        }
        else if (age < 35) {
            return "No";
        }
        else {
            return "Error";
        }
    }
    // Do Not Edit Here
    console.log(isHeOld("100")); // Error
    console.log(isHeOld(45)); // "Yes"
    console.log(isHeOld(30)); // "No"
};
exports.DT_Assign5 = DT_Assign5;
const DT_Assign6 = () => {
    // const post: [number, string, boolean] = [100, 200, "Title"]; // Error
    // const post: [number, string, boolean] = ["Title", 100, true]; // Error
    const post = [100, "Title", true]; // Good
    // post.push("Elzero"); // Error => Cant Add
    // Create Destructuring Here
    const [id, title, state] = post;
    // Do Not Edit Here
    console.table({ id, title, state }); // 100, Title, true
};
exports.DT_Assign6 = DT_Assign6;
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
const DT_Assign8 = () => {
    const user = {
        username: "Elzero",
        age: 40,
        website: "Elzero.org",
        skills: { frontEnd: ["HTML", "CSS", "JS"], backEnd: ["PHP", "Python"] },
    };
    // We Need To Remove Error From This Edits
    user.username = "Osama";
    user.age = "40";
    user.skills.backEnd.push(100);
};
exports.DT_Assign8 = DT_Assign8;
//# sourceMappingURL=data-types.js.map