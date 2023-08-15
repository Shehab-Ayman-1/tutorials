import express from "express";
import dotenv from "dotenv";
import cookies from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import authsRoute from "./routes/auths.routes.js";
import { corsConfigs, DBconnection } from "./configs/index.js";

// Configs
const app = express();
dotenv.config();

// Middlewares
app.use(cors(corsConfigs));
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
app.use("/", authsRoute);
app.all("/*", (req, res) => res.status(200).json({ status: 200, message: `${req.method} ${req.url} Route Hasn't Any Api` }));

// Mongoose
DBconnection();
mongoose.connection.on("connected", () => console.log(`DB Connected. 👍`));
mongoose.connection.on("disconnected", () => console.log(`DB Not Connected. 👎`));

app.listen(process.env.PORT, console.log(`Server Running On [http://localhost:${process.env.PORT}] 🚀`));
