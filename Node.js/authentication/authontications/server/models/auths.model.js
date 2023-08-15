import { Schema, model } from "mongoose";

const schema = new Schema(
	{
		fName: { type: String, required: true },
		lName: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: Number, required: true, enum: [5150, 1984, 2001] },
		longToken: { type: String },
	},
	{ timestamps: true }
);

export default model("auths", schema);
