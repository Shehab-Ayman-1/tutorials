import http from "http";
import { existsSync, promises } from "fs";
import { extname, join, parse } from "path";

export const httpServers = () => {
	let server = http.createServer((req, res) => {
		console.log(`${req.method}`);
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
};

export const nextServer = () => {
	const PORT = 3000;
	const __dirname = "./";

	const serveFile = async (filePath, contentType, response) => {
		try {
			const type = contentType.includes("image") ? "" : "utf8";
			const rawData = await promises.readFile(filePath, type);

			const data = contentType === "application/json" ? JSON.parse(rawData) : rawData;
			const status = filePath.includes("404.html") ? 404 : 200;

			response.writeHead(status, { "Content-Type": contentType });
			response.end(contentType === "application/json" ? JSON.stringify(data) : data);
		} catch (error) {
			console.log(error);
			response.statusCode = 404;
			response.end();
		}
	};

	const server = http.createServer((req, res) => {
		console.log(req.method, req.url);
		let extension = extname(req.url);
		let contentType = "";

		switch (extension) {
			case ".css": {
				contentType = "text/css";
				break;
			}
			case ".js": {
				contentType = "text/javascript";
				break;
			}
			case ".json": {
				contentType = "application/json";
				break;
			}
			case ".jpg": {
				contentType = "image/jpeg";
				break;
			}
			case ".png": {
				contentType = "image/png";
				break;
			}
			case ".txt": {
				contentType = "text/plain";
				break;
			}
			default: {
				contentType = "text/html";
				break;
			}
		}

		let filePath =
			contentType === "text/html" && req.url === "/"
				? join(__dirname, "views", "index.html")
				: contentType === "text/html" && req.url.slice(-1) === "/"
				? join(__dirname, req.url, "index.html")
				: contentType === "text/html"
				? join(__dirname, "views", req.url)
				: join(__dirname, req.url);

		// Makes .html Not Required In The Browser
		if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

		// Is Exist
		const isFileExist = existsSync(filePath);
		if (isFileExist) return serveFile(filePath, contentType, res);
		else serveFile(join(__dirname, "views", "404.html"), "text/html", res);
	});

	server.listen(PORT, () => console.log(`http://localhost:${PORT} 🚀`));
};
