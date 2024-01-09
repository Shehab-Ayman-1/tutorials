import express from "express";
import ytdl from "ytdl-core";
import fs from "fs";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/download-video", async (req, res) => {
	const { video } = req.body;

	let stream;
	if (video.url.includes("youtu")) {
		const response = ytdl(video.url, { filter: "audioandvideo", quality: "lowestvideo" });
		stream = response.pipe(fs.createWriteStream(`server/${video?.name || "video"}.mp4`));
	} else {
		await axios.get(video.url, { responseType: "stream" });
		stream = response.data.pipe(fs.createWriteStream(`server/${video?.name || "video"}.mp4`));
	}

	stream.on("finish", () => {
		res.status(200).send("Video downloaded successfully");
	});

	stream.on("error", (err) => {
		console.error(err);
		res.status(500).send("Error Downloading Video");
	});
});

app.listen(5000, () => console.log("Server Running On [http://localhost:5000]"));
