import { useState } from "react";

export const AddOne = () => {
	const [region, setRegion] = useState("");

	const saveRecipe = async (region: string) => {
		try {
			await fetch("/api/postOne", {
				method: "POST",
				body: region,
			});

			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<input type="text" value={region} onChange={({ target: { value } }) => setRegion(value)} placeholder="Enter Your Region" />
			<button type="submit" onClick={() => saveRecipe(region)}>
				Add
			</button>
		</div>
	);
};
