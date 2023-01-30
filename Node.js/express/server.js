import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersRoute from "./routes/users.routes.js";

let app = express();

// Read JSON, Encode, And Cookies
app.use(express.json()); // Let Express Recieve Json Data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Read Files Inside static File
app.use("/static", express.static("./static"));
app.use("/static", express.static("./node_modules/bootstrap/dist"));

app.use(cors());
dotenv.config();

// Pug
app.set("view engine", "pug"); // Set View Engine With Express
app.get("/", (req, res) => res.render("index", { title: "Express Server" }));

// Routing
app.use("/api/users", usersRoute);

// Open The Server
let PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server Is Connected [http://localhost:${PORT}]`));
