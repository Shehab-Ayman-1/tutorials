import express from "express";
import myCors from "cors";
import { join } from "path";

export const publics = (app) => {
	/* Middlewares:
      - use -> We Callback The Middle Wares In This Method
      - static -> Make The Public Folder Is The Primary Folder For The HTML, And CSS
      - urlencoded -> Edit The Express Encoded Like Data Size
      - json -> Make Express Revieve/Send JSON Data From/To The Client
   */
	app.use(express.static("../public"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true, limit: "10mb" }));
};

export const cors = (app) => {
	// cors(options?) -> Mind The Cors Error While Called The Server On The Client Side

	const whiteList = ["https://www.mysite.com", "http://localhost:5000"];
	const options = {
		origin: (origin, callback) => {
			// origin === undefined -> ON localhost
			let isAccepted = whiteList.some((site) => site === origin);

			if (isAccepted || origin !== undefined) callback(null, origin);
			else callback(console.log(`${origin}: Not Allowed By CORS`));
		},
		optionsSuccessStatus: 200,
	};
	app.use(myCors(options));
};

export const all = (app) => {
	const page404 = (req, res) => {
		const __dirname = process.cwd();
		res.status(404).sendFile(join(__dirname, "views", "404.html"));
	};

	app.all("*", page404);
};
