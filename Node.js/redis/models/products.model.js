import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	img: String,
	brand: { type: String, required: false },
	kinds: [
		{
			img: String,
			kind: String,
			branches: [
				{
					name: String,
					content: String,
					cost: Number,
					discount: Number,
					paketCount: String,
					shrenkCount: String,
				},
			],
		},
	],
});

export default mongoose.model("products", Schema);
