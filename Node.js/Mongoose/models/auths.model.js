import { Schema, model } from "mongoose";

const schema = new Schema({
	fName: String,
	lName: String,
	email: String,
	password: String,
	role: { type: Number, default: 2001, enum: [5150, 1984, 2001] },
	refreshToken: String,
});

export default model("auths", schema);
