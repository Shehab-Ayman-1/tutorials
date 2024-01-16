import { useState, useCallback, memo } from "react";
import axios from "axios";

const Field = memo(({ label, name, content, setContent }) => {
	return (
		<div className="">
			<label style={{ fontSize: 18, marginLeft: 14, display: "block" }}>{label}:</label>
			<input
				type="text"
				placeholder={label}
				value={content[name]}
				required
				style={{ textTransform: "none !important" }}
				onChange={(event) => setContent((content) => ({ ...content, [name]: event.target.value }))}
			/>
		</div>
	);
});

const QUALITIES = ["144p", "270p", "360p", "480p", "720p", "1080p"];
const Select = memo(({ label, name, content, setContent }) => {
	return (
		<select value={content[name]} onChange={(event) => setContent({ ...content, [name]: event.target.value })}>
			<option value="">{label}</option>
			{QUALITIES.map((quality) => (
				<option key={quality} value={quality}>
					{quality}
				</option>
			))}
		</select>
	);
});

export const VideosDownloader = () => {
	const [content, setContent] = useState({ type: "video", url: "", quality: "360p" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState(null);
	const [coppied, setCoppied] = useState(false);

	const handleSubmit = useCallback(async (event) => {
		event.preventDefault();

		const isPlaylist = content.url.startsWith("https://www.youtube.com/playlist?list=");
		const isVideo = content.url.startsWith("https://www.youtube.com/watch?v");

		if (content.type === "playlist" && !isPlaylist) return alert("Wronge Playlist URL");
		if (content.type === "video" && !isVideo) return alert("Wronge Video URL");

		if (!content.url || !content.quality) return alert("Please Fill All The Required Fields.");
		setLoading(true);
		setData(null);

		try {
			const response = await axios.post(`http://localhost:5000/youtube-downloader/${content.type}`, content);
			setData(response.data);
		} catch (error) {
			console.log(error);
			setError(error.response.data || "Something Has An Error, Please Try Again Later. 😔💔");
		} finally {
			setLoading(false);
		}
	});

	const handleClipboard = async (event) => {
		event.preventDefault();

		const urls = data.map((video) => video.downloadedUrl + "\n\n").join(" ");
		await navigator.clipboard.writeText(urls);

		setCoppied(true);
		setTimeout(() => setCoppied(false), 2000);
	};

	return (
		<div className="f-30">
			<h3 className="main-color" style={{ textAlign: "center" }}>
				Youtube Downloader
			</h3>

			<div className="" style={{ textAlign: "center" }}>
				<button
					className="mybtn"
					style={content.type === "playlist" ? { background: "transparent" } : undefined}
					onClick={() => setContent({ ...content, type: "video" })}>
					Videos
				</button>
				<button
					className="mybtn"
					style={content.type === "video" ? { background: "transparent" } : undefined}
					onClick={() => setContent({ ...content, type: "playlist" })}>
					Playlists
				</button>
			</div>

			<form className="">
				{content.type === "video" && (
					<div className="flex-around">
						<Field label="Video URL" name="url" content={content} setContent={setContent} />
						<Select label="Video Quality" name="quality" content={content} setContent={setContent} />
					</div>
				)}

				{content.type === "playlist" && (
					<div className="flex-around">
						<Field label="Playlist URL" name="url" content={content} setContent={setContent} />
						<Select label="Playlist Quality" name="quality" content={content} setContent={setContent} />
					</div>
				)}

				<button
					type="submit"
					className="mybtn"
					onClick={handleSubmit}
					disabled={loading}
					style={{ marginInline: "auto", display: "block", width: 320 }}>
					<i className="fa fa-search" style={{ color: "white", fontSize: 18 }} /> SEARCH
				</button>

				{data?.length ? (
					<button
						type="button"
						className="mybtn"
						onClick={handleClipboard}
						style={{ marginInline: "auto", display: "block" }}>
						{coppied ? (
							<span>
								<i className="fas fa-check-double" style={{ color: "white", fontSize: 18 }} /> Copied
							</span>
						) : (
							<span>
								<i className="far fa-clipboard" style={{ color: "white", fontSize: 18 }} /> Copy
							</span>
						)}
					</button>
				) : null}
			</form>

			{loading && <p>loading...</p>}

			{error ? <h3 style={{ color: "red" }}>{error}</h3> : null}

			{data?.map((item, i) => (
				<div key={i} style={{ padding: 10, borderRadius: 20, marginBlock: 10, background: "#333" }}>
					<p>{typeof item === "string" && item}</p>

					<div className="flex-start" style={{ display: item?.title ? "flex" : "none" }}>
						<div className="" style={{ position: "relative" }}>
							<img
								src={item?.thumbnail.url}
								alt="thumbnail"
								style={{
									width: item?.thumbnail.width,
									height: item?.thumbnail.height,
									borderRadius: 10,
								}}
							/>
							<span style={{ fontSize: 18, position: "absolute", bottom: 5, right: 5 }}>
								{item?.duration}
							</span>
						</div>

						<div className="">
							<p style={{ fontSize: 18 }}>{item?.title}</p>
							<p style={{ fontSize: 18, textTransform: "initial" }}>{item?.url}.mp4</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
