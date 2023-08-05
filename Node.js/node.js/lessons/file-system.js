import { readFileSync, writeFileSync, appendFileSync, readdirSync } from "fs";

export const fileSystem = () => {
	/* Read, Write, Append
		- readFileSync(path, options?) -> Read Any File On The Directory
		- writeFileSync(path, payload, options?) -> Remove The Current Content, Then Write The New Payload
		- appendFileSync(path, payload, options?) -> Append New Data To The File
		- readdirSync(path, options?) -> Read All Directory Files
	*/

	// Read
	let readFile = readFileSync(`./public/logs/read.txt`, "utf-8");

	// Write
	writeFileSync("./public/logs/write.txt", "Write Files.");
	let writeFile = readFileSync("./public/logs/write.txt", "utf-8");

	// Append
	appendFileSync("./public/logs/append.txt", "- new Message 😎 \n");
	let appendFile = readFileSync("./public/logs/append.txt", "utf-8");

	// Directory Files
	let directoryFiles = readdirSync("./public");
	console.log(`readFile -> ${readFile}`);
	console.log(`writeFile -> ${writeFile}`);
	console.log(`appendFile -> ${appendFile}`);
	console.log(`directoryFiles -> ${directoryFiles}`);
};
