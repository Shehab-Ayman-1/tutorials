import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
	email: {
		type: String,
		required: [true, "From MongoDB Schema, This Email Is Required"],
	},
	username: {
		type: String,
		required: [true, "From MongoDB Schema, This Email Is Already Exist"],
	},
	image: {
		type: String,
	},
});

// In Next.js The Schema Is Cashed In The Models
// So We Can Check If It Is Exist, GET It
// else Create New Schema

export default models.users || model("users", UserSchema);
