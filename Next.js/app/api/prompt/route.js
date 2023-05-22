import { DBConnection } from "@/utils/database";
import PromptsSchema from "@/models/prompts.schema";
import promptsSchema from "@/models/prompts.schema";

export const GET = async (req) => {
	try {
		await DBConnection();

		const prompts = await promptsSchema.find().populate("creator");
		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify("Failed To GET Prompts, app>api>prompt>route.js, " + error), { status: 500 });
	}
};

export const POST = async (req) => {
	try {
		const { userId, prompt, tag } = await req.json();
		await DBConnection();

		const createPrompt = new PromptsSchema({ creator: userId, prompt, tag });
		await createPrompt.save();

		return new Response(JSON.stringify(createPrompt), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify("Failed To POST A New Prompt: app>api>prompt>route.js, " + error), { status: 500 });
	}
};
