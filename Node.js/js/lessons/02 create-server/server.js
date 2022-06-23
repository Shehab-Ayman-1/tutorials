import http from "http";
import fileSystem from "fs";

export default function createNewModule() {
	const createNewServer = http.createServer((req, res) => {
		fileSystem.readFile("../html/index.html", null, (err, data) => {
			try {
				res.end(data);
				console.log(data);
			} catch {
				res.end("The Server Has An Error");
				console.error(err);
			}
		});
	});

	createNewServer.listen(5000, "127.0.0.1", () => {
		console.log("The Server Is Running Now ...");
	});
}
