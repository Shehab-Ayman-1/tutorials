import { useEffect, useState } from "react";
import axios from "axios";

export const TrackLoading = () => {
	const [progress, setProgress] = useState(0);
	const [imgUrl, setImgUrl] = useState("");

	const fetcher = async () => {
		setProgress(() => 0);

		const options = {
			responseType: "blob",
			onDownloadProgress: ({ loaded, total }) => setProgress(() => Math.floor((loaded / total) * 100)),
		};

		const response = await axios.get(`https://picsum.photos/1200/1200`, options);
		setImgUrl(() => URL.createObjectURL(response.data));
	};

	useEffect(() => {
		fetcher();
	}, []);

	return (
		<div className="f-30">
			<button className="mybtn" onClick={fetcher}>
				Refetch
			</button>

			<div className="progressbar" style={{ width: "50%", position: "relative", margin: "auto" }}>
				<span style={{ color: "white", textAlign: "center" }}>Loading {progress}%</span>
				<div className="fill" style={{ width: `${progress}%`, height: "5px", background: "var(--second-color)", position: "absolute", bottom: 0, left: 0, zIndex: -1 }} />
			</div>

			{imgUrl && <img src={imgUrl} alt="img" width="50%" style={{ display: "block", margin: "20px auto" }} />}
		</div>
	);
};
