"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ImplementInterface() {
    class Page {
        constructor(username, theme, font) {
            this.username = username;
            this.theme = theme;
            this.font = font;
            this.save = () => {
                console.log("save");
            };
            this.update = () => {
                console.log("update");
            };
        }
    }
    const page = new Page("shehab", true, "open sans");
    console.log(page);
}
exports.default = ImplementInterface;
//# sourceMappingURL=implement-interface.js.map