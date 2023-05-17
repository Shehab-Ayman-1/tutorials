import { useState } from "react";

export const Update = ({ id, region }: { id: string; region: string }) => {
	const [value, setValue] = useState(region);

	const openWidget = async ({ target }: { target: any }) => {
		document.querySelectorAll(".widget").forEach((widget: any) => (widget.style.display = "none"));
		target.nextElementSibling.style.display = "block";
	};

	const handleUpdate = async () => {
		try {
			let body = JSON.stringify({ id: id, region: value });

			await fetch("/api/updateOne", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body,
			});
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={{ display: "inline-block" }}>
			<button style={{ background: "orange" }} onClick={openWidget}>
				Update
			</button>
			<div
				className="widget"
				style={{ width: 300, height: 300, display: "none", position: "fixed", top: "25%", left: "25%", background: "#f1f1f1", padding: 10, border: "1px solid black", color: "white" }}>
				<input type="text" value={value} onChange={({ target: { value } }) => setValue(value)} placeholder="New Name" />
				<button onClick={handleUpdate}>Update</button>
			</div>
		</div>
	);
};
