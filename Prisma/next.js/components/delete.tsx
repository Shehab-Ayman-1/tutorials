import React from "react";

export const Delete = ({ id }: { id: string }) => {
	const handleDelete = async () => {
		await fetch(`/api/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
		window.location.reload();
	};

	return (
		<button style={{ backgroundColor: "red", color: "white" }} onClick={handleDelete}>
			Delete
		</button>
	);
};
