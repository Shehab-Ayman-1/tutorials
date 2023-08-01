import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersRoute from "./routes/users.routes.js";

export const structor = () => {
	// Configs
	let app = express();
	app.use(cors());
	dotenv.config();

	// Middlewares
	app.use(express.json()); // let express recieve json data
	app.use(express.urlencoded({ extended: true, limit: "50mb" })); // increase the size of the data
	app.use(cookieParser()); // use cookies on the server
	app.use(express.static("./static"));

	// Routing
	app.get("/", (req, res) => res.send("Welcome To Express."));
	app.use("/api/users", usersRoute);

	// Open The Server
	let PORT = process.env.PORT;
	app.listen(PORT, () => console.log(`Server Is Connected [http://localhost:${PORT}]`));
};
