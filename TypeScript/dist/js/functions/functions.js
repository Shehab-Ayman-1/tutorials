"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const annotations_1 = __importDefault(require("./annotations"));
const arrow_function_1 = __importDefault(require("./arrow-function"));
const optional_parameters_1 = __importDefault(require("./optional-parameters"));
const rest_parameters_1 = __importDefault(require("./rest-parameters"));
const Functions = () => {
    (0, annotations_1.default)();
    (0, arrow_function_1.default)();
    (0, optional_parameters_1.default)();
    (0, rest_parameters_1.default)();
};
exports.default = Functions;
//# sourceMappingURL=functions.js.map