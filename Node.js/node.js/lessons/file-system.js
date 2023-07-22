import fs from "fs";

export const readFile = () => {
	// readFileSync -> Read File From The System

	let readFile = fs.readFileSync(`./logs/read.txt`, "utf-8");
	console.log(readFile);
};

export const writeFile = () => {
	// writeFileSync -> Delete The Data Then Write The New One OR Create A New File Then Write The New Data On It

	fs.writeFileSync("./logs/write.txt", "Write Files.");
	let writeFile = fs.readFileSync(`./logs/write.txt`, "utf-8");
	console.log(writeFile);
};

export const allDirectoryFiles = () => {
	// readdirSync -> Read All The Directory Files Names

	let directoryFiles = fs.readdirSync("./");
	console.log(directoryFiles);
};

export const appendFiles = () => {
	// appendFileSync -> Append New Message To The File

	fs.appendFileSync("./logs/append.txt", "- new Message \n");
	let appendFile = fs.readFileSync(`./logs/append.txt`, "utf-8");
	console.log(appendFile);
};
