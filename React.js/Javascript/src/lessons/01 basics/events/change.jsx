import { useState } from "react";

export const Change = () => {
	const [string, setString] = useState("");
	const [count, setCount] = useState(0);

	const updateString = (event) => {
		setString(event.target.value);
	};

	const updateStringCount = (event) => {
		setCount(event.target.value.length);
	};

	return (
		<div className="f-20">
			<div className="">
				<h3 className="main-color">
					My String Is: <span className="second-color">{string}</span>
				</h3>
				<input placeholder="String Letters..." onChange={updateString} />
			</div>

			<div className="">
				<h3 className="main-color">
					String Count Is: <span className="second-color">{count}</span>
				</h3>
				<input placeholder="String Count..." onChange={updateStringCount} />
			</div>
		</div>
	);
};
