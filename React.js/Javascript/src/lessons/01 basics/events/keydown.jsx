export function Keydown() {
	const handleKey = (event) => {
		console.log(event.key);
		if (event.key === "w") event.target.style.background = "white";
		if (event.key === "b") event.target.style.background = "black";
		if (event.key === "r") event.target.style.background = "red";
		if (event.key === "g") event.target.style.background = "green";
		if (event.key === "y") event.target.style.background = "yellow";
		if (event.key === "Enter") event.target.style.background = "transparent";
	};

	return (
		<div>
			<ul>
				<li>Enter - Reset</li>
				<li>w - White</li>
				<li>b - Black</li>
				<li>r - Red</li>
				<li>g - Green</li>
				<li>y - Yellow</li>
			</ul>
			<input type="text" onKeyDown={handleKey} placeholder="Press First Letter Of The Color" />
		</div>
	);
}
