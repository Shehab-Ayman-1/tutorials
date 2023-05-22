import { Schema, model, models, Types } from "mongoose";

const PromptsSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	prompt: {
		type: String,
		required: [true, "From Mongoose Schema, Prompt Is Required"],
	},
	tag: {
		type: String,
		required: [true, "Tag Is Reguired"],
	},
});

export default models.prompts || model("prompts", PromptsSchema);
