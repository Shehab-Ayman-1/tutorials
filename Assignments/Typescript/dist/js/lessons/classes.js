"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_Assign7 = exports.Class_Assign6 = exports.Class_Assign5 = exports.Class_Assign4 = exports.Class_Assign3 = exports.Class_Assign2 = exports.Class_Assign1 = void 0;
const Class_Assign1 = () => {
    // Create Class Here
    class Player {
        constructor(name, type, level, state) {
            this.details = () => {
                if (!state)
                    return { name, type, level };
                return { name: name === "Osama" || name === "Amr" ? `VIP ${name}` : name, type, level, state };
            };
        }
    }
    // Do Not Edit The Code Below
    let player1 = new Player("Osama", "Mage", 90, true);
    let player2 = new Player("Shady", "Archer", "85", false);
    let player3 = new Player("Amr", "Fighter", 50, true);
    let player4 = new Player("Mahmoud", "Assassin", 77);
    console.table(player1.details()); // VIP Osama, Type Is Mage Level Is 90
    console.table(player2.details()); // Shady, Type Is Archer Level Is 85
    console.table(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
    console.table(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
};
exports.Class_Assign1 = Class_Assign1;
const Class_Assign2 = () => {
    class Shorten {
        constructor(id, username, title) {
            this.id = id;
            this.username = username;
            this.title = title;
        }
    }
    let tester = new Shorten(100, "Elzero", "Developer");
    console.table({ id: tester.id, username: tester.username });
};
exports.Class_Assign2 = Class_Assign2;
const Class_Assign3 = () => {
    class Show {
        constructor(_title) {
            this._title = _title;
        }
        get title() {
            return this._title;
        }
        set title(val) {
            this._title = val;
        }
    }
    let tester = new Show("Osama");
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
    tester.title = "Elzero"; // Property 'title' does not exist on type 'Show'
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
};
exports.Class_Assign3 = Class_Assign3;
const Class_Assign4 = () => {
    // Create Your Class Here
    class Player {
        constructor(id, title, level) {
            this.id = id;
            this.title = title;
            this.level = level;
        }
        logIn() {
            return "Logged In";
        }
        logOut(val) {
            return `Logged Out, ${val}`;
        }
    }
    let { id, title, level, logIn, logOut } = new Player(100, "Elzero", 95);
    console.table({ id, title, level, login: logIn(), logout: logOut("Good Bye") }); // 100, ELzero, 95, Logged In, Logged Out Good Bye
};
exports.Class_Assign4 = Class_Assign4;
const Class_Assign5 = () => { };
exports.Class_Assign5 = Class_Assign5;
const Class_Assign6 = () => { };
exports.Class_Assign6 = Class_Assign6;
const Class_Assign7 = () => { };
exports.Class_Assign7 = Class_Assign7;
//# sourceMappingURL=classes.js.map