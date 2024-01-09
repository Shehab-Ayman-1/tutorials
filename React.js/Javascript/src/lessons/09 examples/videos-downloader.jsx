import { useState } from "react";
import axios from "axios";

export const VideosDownloader = () => {
	const [video, setVideo] = useState({ name: "", url: "" });
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!video.url) return alert("No URL Provided");

		setLoading(true);

		try {
			const response = await axios.post("http://localhost:5000/download-video", { video });
			setMessage(response.data);
		} catch (error) {
			console.log(error);
			setMessage(error.response.data);
		} finally {
			setLoading(false);
			setTimeout(() => setMessage(""), 5000);
			setTimeout(() => setVideo({ name: "", url: "" }), 5000);
		}
	};

	return (
		<div className="f-30">
			<h3 className="main-color">Videos Downloader</h3>

			<form className="">
				<input
					type="text"
					placeholder="Video Name"
					value={video.name}
					onChange={(event) => setVideo((video) => ({ ...video, name: event.target.value }))}
				/>
				<input
					type="text"
					placeholder="Video URL"
					value={video.url}
					style={{ textTransform: "none !important" }}
					onChange={(event) => setVideo((video) => ({ ...video, url: event.target.value }))}
				/>
				<button type="submit" className="mybtn" onClick={handleSubmit} disabled={loading}>
					DOWNLOAD
				</button>
			</form>

			<p className="second-color">{message}</p>
		</div>
	);
};
