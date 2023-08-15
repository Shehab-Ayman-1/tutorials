import mongoose from "mongoose";

export const DBconnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB);
	} catch (error) {
		console.log(error);
	}
};
