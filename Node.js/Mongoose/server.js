import express from "express";
import mongoose from "mongoose";
import cookies from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { auths, CRUD, custome, aggregates } from "./routes/index.js";
import { DBconnection } from "./configs/connection.js";

// Configs
let app = express();
dotenv.config();
app.use(cors());

// MiddleWares
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
app.use("/api/auths", auths);
app.use("/api/crud", CRUD);
app.use("/api/custome", custome);
app.use("/api/aggregates", aggregates);

// MongoDB
DBconnection();
mongoose.set("strictQuery", true);
mongoose.connection.on("connected", () => console.log(`Server Running On [http://localhost:${process.env.PORT}] 🚀`));
mongoose.connection.on("disconnected", () => console.log(`Database Disconnected 😢`));

app.listen(process.env.PORT);
