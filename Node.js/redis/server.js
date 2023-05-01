// Node.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

// Routes
import productsRoute from "./routes/products.routes.js";

// Configs
const app = express();
app.use(cors());
dotenv.config();

// Data Limits
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb", parameterLimit: 5000000000 }));
app.use(bodyParser.json({ extended: true, limit: "500mb", parameterLimit: 5000000000 }));

// Compress Data
const filter = (req, res) => (req.headers["x-no-compression"] ? false : compression.filter(req, res));
app.use(compression({ level: 6, threshold: 10 * 1000, filter }));

// Routes
app.use("/api/products", productsRoute);
app.use("/", (req, res) => res.send("Server Running"));

// MongoDB Connection
const PORT = process.env.PORT;
const DBconnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB);
	} catch (error) {
		console.log(`Databse Disconnected 🤦‍♂️ ${error}`);
	}
};

mongoose.set("strictQuery", true);
mongoose.connection.on("connected", () => console.log(`Database Is Running On [http://localhost:5000] 😎`));
mongoose.connection.on("disconnected", () => console.log(`Database Is Disconnected 🤦‍♂️`));

app.listen(PORT, DBconnection);
