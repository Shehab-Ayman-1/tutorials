export function Keydown() {
	const handleKey = (event) => {
		console.log(event.key);
		if (event.key === "w") {
			event.target.style.background = "white";
		} else if (event.key === "b") {
			event.target.style.background = "black";
		} else if (event.key === "r") {
			event.target.style.background = "red";
		} else if (event.key === "g") {
			event.target.style.background = "green";
		} else if (event.key === "y") {
			event.target.style.background = "yellow";
		} else if (event.key === "Enter") {
			event.target.style.background = "transparent";
		}
	};

	return (
		<div>
			Press w white - b black - r red - g green - y yellow - enter reset
			<input type="text" onKeyDown={handleKey} />
		</div>
	);
}
