"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Create New Typescript Project [ tsc --init ]
    Typescript Is Checking The Errors Before Run Code And Settings This Checkers In The tsConfig.json File

    // tsConfig.json
    [1] rootDir // Set The Src Files Path
    [2] outDir // Set The Output Files Path
    [3] sourceMap // Create A Source Mao For Earch Js File
    [4] noImplicitAny // Mind The Any Errors In Functions // [ true => Mind With No Annotation, false => skipe ]
    [5] noImplicitReturns // Mind Any With No Return [ true => Work, false => Skipe ]
    [6] noUnusedLocals // Mind Compile Any Unused Variable In The File
    [7] noUnusedParameters // Mind Any Unused Parameters
*/
const annotations_1 = __importDefault(require("./annotations/annotations"));
const functions_1 = __importDefault(require("./functions/functions"));
// ============================================ Annotations ============================================
(0, annotations_1.default)();
// ============================================= Functions =============================================
(0, functions_1.default)();
//# sourceMappingURL=script.js.map