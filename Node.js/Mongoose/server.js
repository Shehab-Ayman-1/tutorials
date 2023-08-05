import express from "express";
import mongoose from "mongoose";
import cookies from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authsRoute from "./routes/auths.routes.js";
import productsRoute from "./routes/products.routes.js";
import { DBconnection } from "./configs/connection.js";

// Configs
let app = express();
dotenv.config();

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookies());

// Routes
app.use("/auths/", authsRoute);
app.use("/products/", productsRoute);

// MongoDB
DBconnection();
mongoose.set("strictQuery", true);
mongoose.connection.on("connected", () => console.log(`Database Connected [http://localhost:${process.env.PORT}] 🚀`));
mongoose.connection.on("disconnected", () => console.log(`Database Disconnected 😢`));

app.listen(process.env.PORT, () => console.log("Server Running"));
