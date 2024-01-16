import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";
import ytpl from "ytpl";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/youtube-downloader/video", async (req, res) => {
	const { url, quality } = req.body;

	const info = await ytdl.getInfo(url);
	const stream = info.formats.find((item) => item.qualityLabel === quality);
	const { title, thumbnails } = info.videoDetails;

	const video = {
		title,
		url,
		duration: "00,00",
		thumbnail: thumbnails[2],
		downloadedUrl: stream.url,
	};
	res.status(200).send([video]);
});

app.post("/youtube-downloader/playlist", async (req, res) => {
	const { url, quality } = req.body;

	const playlistId = url.slice(url.indexOf("list=") + 5);
	const playlist = await ytpl(playlistId, { limit: Infinity });

	const items = playlist.items.map(async ({ title, url, duration, thumbnails }, i) => {
		const name = `${i >= 10 ? i : `0${i + 1}`} ${title}`;

		const info = await ytdl.getInfo(url);
		const downloadedUrl = info.formats.find((item) => item.qualityLabel === quality).url;

		return {
			title: name,
			url,
			duration,
			thumbnail: thumbnails[2],
			downloadedUrl,
		};
	});

	const result = await Promise.all(items);
	res.status(200).json(result);
});

app.listen(5000, () => console.log("Server Running On [http://localhost:5000]"));
