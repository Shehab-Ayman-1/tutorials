import { join } from "path";

export const intro = (app) => {
	const __dirname = process.cwd();

	app.get("^/$|/home-page(.html)?", (req, res) => res.send("Home Page."));

	app.get("/send", (req, res) => res.send("Send Message."));

	app.get("/send-file", (req, res) => res.sendFile(join(__dirname, "views", "new.html")));

	app.get("/redirect", (req, res) => res.redirect(301, "/send-file"));

	app.get("/*", (req, res) => res.sendFile(join(__dirname, "views", "404.html")));
};

export const chain = (app) => {
	const one = (req, res, next) => {
		console.log("one");
		next();
	};

	const two = (req, res, next) => {
		console.log("two");
		next();
	};

	const three = (req, res) => {
		console.log("three");
	};

	const final = (req, res, next) => {
		next();
		res.send("final");
		console.log("final");
	};

	app.get("/chain", final, one, two, three);

	app.get("/chain", final, one, two, [three]);

	app.get("/chain", final, one, [two, three]);

	app.get("/chain", final, [one, two, three]);

	app.get("/chain", [final, one, two, three]);
};
