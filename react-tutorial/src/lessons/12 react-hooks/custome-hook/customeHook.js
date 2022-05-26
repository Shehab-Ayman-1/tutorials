import React from "react";
import { UseCount } from "./hooks/counter";
import { useRandomBg, randColor } from "./hooks/randomBg.js";

export default function CustomeHook() {
	const { count, handleIncreament, handleDecreament } = UseCount();
	useRandomBg();
	return (
		<div className="f-20">
			<div className="counter">
				<span className="main-color" style={{ color: randColor() }}>
					Counter : {count}
				</span>
				<br />
				<button className="mybtn" onClick={handleIncreament} style={{ color: randColor() }}>
					Increament
				</button>
				<button className="mybtn" onClick={handleDecreament} style={{ color: randColor() }}>
					Decreament
				</button>
			</div>
		</div>
	);
}
