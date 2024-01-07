import { useState } from "react";
import { useCount } from "./hooks/counter";
import { useGenerateColor } from "./hooks/randomBg";

export function CustomeHook() {
	const { count, handleIncreament, handleDecreament } = useCount();
	const { color, generate } = useGenerateColor();
	const [colors, setColors] = useState([]);

	const handleGeneration = () => {
		setColors((prev) => prev.concat(generate()));
	};

	const style = (bg) => ({
		width: 18,
		height: 18,
		background: bg,
		borderRadius: "50%",
		border: "1px solid white",
	});

	return (
		<div className="f-20">
			<div className="counter">
				<span className="main-color">Counter: {count}</span>
				<br />
				<button className="mybtn" onClick={handleIncreament}>
					Increament
				</button>
				<button className="mybtn" onClick={handleDecreament}>
					Decreament
				</button>
			</div>

			<hr />

			<div className="color-generation">
				<div className="colors flex-start">
					{colors.concat(color).map((color, i) => (
						<div style={style(color)} key={i} />
					))}
				</div>
				<button className="mybtn" onClick={handleGeneration}>
					Generate
				</button>
			</div>
		</div>
	);
}
