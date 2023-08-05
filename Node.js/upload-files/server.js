import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { join } from "path";
import { checkExists, checkSize, checkExtensions } from "./middlewares/upload.middlewares.js";

// Configs
const __dirname = process.cwd();
const app = express();
dotenv.config();
app.use(cors());
app.use(express.static("./public"));

// Routes
app.get("^/$", (req, res) => res.sendFile(join(__dirname, "views", "index.html")));

app.post("/api/upload-files", fileUpload({ createParentPath: true }), checkExists, checkSize, checkExtensions(".png", ".jpg", ".jpeg"), (req, res) => {
	const files = req.files;
	const filesLength = Object.keys(files).length;

	Object.keys(files).forEach((key) => {
		files[key].mv(join(__dirname, "files", files[key].name), (error) => {
			if (error) return res.status(500).json({ status: 400, message: error });
		});
	});

	res.status(200).json({ status: 200, message: `${filesLength} Images Was Recieved. 😊` });
});

// Run
app.listen(process.env.PORT, () => console.log(`Server Running On [http://localhost:${process.env.PORT}]. 🚀`));
