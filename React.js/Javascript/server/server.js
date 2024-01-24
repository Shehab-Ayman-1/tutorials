import express from "express";
import cors from "cors";
import { VIDEO, PLAYLIST } from "./controllers/youtube.controller.js";

const app = express();
app.use(express.json());
app.use(cors());

// Youtube
app.post("/youtube-downloader/video", VIDEO);
app.post("/youtube-downloader/playlist", PLAYLIST);

app.listen(5000, () => console.log("Server Running On [http://localhost:5000]"));
