import { DBConnection } from "@/utils/database";
import promptsSchema from "@/models/prompts.schema";

export const GET = async (req, { params: { userId } }) => {
	try {
		await DBConnection();
		const posts = await promptsSchema.find().populate("creator");

		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify("Faild To GET Posts, app>api>users>userId>route.js"), { status: 500 });
	}
};
