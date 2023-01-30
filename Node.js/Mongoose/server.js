import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import productsRoute from "./routes/products.routes.js";

let app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use("/", productsRoute);

let port = process.env.port;
let url = process.env.mongo_url;

async function DBconnection() {
	try {
		await mongoose.connect(url);
	} catch (error) {
		console.log(error);
	}
}

mongoose.set("strictQuery", true);

mongoose.connection.on("connected", () => console.log(`Database Was Connected [http://localhost:${port}]`));
mongoose.connection.on("disconnected", () => console.log(`Database Was Disconnected`));

app.listen(port, DBconnection);
