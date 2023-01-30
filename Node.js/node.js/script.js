import fs from "fs";
import os from "os";
import ev from "events";
import http from "http";

(function fileSystem() {
	/* 
		fs.readFileSync -> Read File From The System
		fs.writeFileSync -> Delete The Data Then Write The New One OR Create A New File Then Write The New Data On It
		fs.readdirSync -> Read All The Directory Files
	*/
	let readFile = fs.readFileSync("./decode.txt", "utf-8");
	console.log(readFile);

	fs.writeFileSync("./decode.txt", "New Message From Write Method.");
	console.log(readFile);

	let allFiles = fs.readdirSync("./");
	console.log(allFiles);
})();

(function operatingSystem() {
	/* 
		os.freemem -> Get The Free Space In The RAM
		os.totalmem -> Get The Total Stace In The RAM
		os.homedir -> Get The Home Directory
	*/
	console.table({
		freesMemory: os.freemem(),
		totalMemory: os.totalmem(),
		homedir: os.homedir(),
	});
})();

(function https() {
	let server = http.createServer((req, res) => {
		if (req.url === "/") {
			res.write("You Create A Manual Server, Enjoy!");
			res.end();
		} else {
			res.write(`Your Address Now Is: ${res.url}`);
			res.end();
		}
	});
	let PORT = 3000;
	server.on("connection", () => console.log(`http://localhost:${PORT}`));
	server.listen(PORT);
})();

(function events() {
	// EventEmitter -> Create A New Event Method
	let emitter = new ev.EventEmitter();
	emitter.on("onName", () => console.log("From onName Event"));
	emitter.emit("onName");
})();
