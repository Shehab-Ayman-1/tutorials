import http from "http";
import fs from "fs";
import url from "url";

export default function Routing() {
	const server = http.createServer((req, res) => {
		const pathName = url.parse(req.url).pathname;
		console.log(pathName); // /pathname

		const handleRequest = (filePath) => {
			fs.readFile(filePath, null, (err, data) => res.end(data));
		};

		switch (pathName) {
			case "/":
				return handleRequest("../html/index.html");
			case "/about":
				return handleRequest("../html/about.html");
			case "/services":
				return handleRequest("../html/services.html");
			default:
				return handleRequest("../html/not-found.html");
		}
	});

	server.listen(3000, "localhost", () => console.log("Server Running ..."));
}
