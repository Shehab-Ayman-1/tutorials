import mongoose from "mongoose";

let isConnected = false; // track the connection

export const DBConnection = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) return console.log("MongoDB is already connected");

	try {
		await mongoose.connect(process.env.MONGO_URL, {
			dbName: "share_prompt",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};
