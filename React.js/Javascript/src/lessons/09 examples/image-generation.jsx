import axios from "axios";
import { useState } from "react";

const GPT_KEY = "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";
export const AIImageGeneration = () => {
	const [images, setImages] = useState({ creates: 0, data: ["", "", ""] });
	const [prompt, setPrompt] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleGenerate = async (event) => {
		event.preventDefault();
		try {
			setLoading(true);
			setError("");

			const options = {
				url: "https://api.openai.com/v1/images/generations",
				headers: { Authorization: `Bearer ${GPT_KEY}` },
				body: { prompt: prompt, n: 3, size: "256x256" }, // prompt: searchText, n: count, size: ['256x256', '512x512', '1024x1024']
			};
			const response = await axios.post(options.url, options.body, { headers: options.headers });
			const data = response.data;

			setImages(data);
		} catch (error) {
			console.log(error.response.data.error);
			setError(error.response.data.error.message);
		} finally {
			setLoading(false);
		}
	};

	const cardStyle = {
		width: 256,
		height: 256,
		background: "var(--dark-color)",
		borderRadius: 20,
		overflow: "hidden",
		boxShadow: "0 0 20px black",
	};
	const imgStyle = { width: "100%", height: "100%", objectFit: "fill" };
	return (
		<div className="f-30">
			<h4 className="main-color" style={{ textAlign: "center" }}>
				ChatGPT Image Generation
			</h4>

			<form style={{ textAlign: "center" }}>
				<input type="text" onChange={(event) => setPrompt(event.target.value)} />
				<button type="submit" className="mybtn" disabled={loading} onClick={handleGenerate}>
					GENERATE
				</button>
			</form>

			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, gap: 30 }}>
				{images.data.map((image, i) => (
					<div key={i} style={cardStyle}>
						{image && <img src={image.url} style={imgStyle} />}
					</div>
				))}
			</div>

			<div style={{ color: "red", marginTop: 20 }}>{error}</div>
		</div>
	);
};
