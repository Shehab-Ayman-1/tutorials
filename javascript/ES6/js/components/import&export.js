// We Can To Import Component In Other Component
import promise from "./promise.js";

// When Import The Default Export, Has To Import Without {}
export default function importExport() {
	// promise();
	console.log("Hello From Import & Export File");
}

// When Import The Export, Has To Import With {}
export const name = "shehab";

const age = 21;
const myObj = {
	myName: "shehab",
	mySkills: {
		HTML: "70%",
		Css: "90%",
		Js: "80%",
	},
	// We Can To Create A Function In The Object Without key Because The Function Name Work As A Key
	sayHello(name) {
		return `Hello ${name}`;
	},
};

export { age, myObj };
