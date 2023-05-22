import { DBConnection } from "@/utils/database";
import PromptsSchema from "@/models/prompts.schema";

export const GET = async (req, { params: { id } }) => {
	try {
		await DBConnection();

		const post = await PromptsSchema.findById(id);

		if (!post) return new Response("Invalide ID, app>api>prompt>id>route.js" + error, { status: 500 });

		return new Response(JSON.stringify(post), error);
	} catch (error) {
		console.log(error);
		return new Response("Failed To GET Prompt app>api>prompt>id>route.js", error);
	}
};

export const PUT = async (req, { params: { id } }) => {
	try {
		await DBConnection();

		let body = await req.json();

		const post = await PromptsSchema.findByIdAndUpdate(id, body, { new: true });

		if (!post) return new Response("Invalide ID, app>api>prompt>id>route.js" + error, { status: 500 });

		return new Response("Successfully Updated", { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Failed To GET Prompt app>api>prompt>id>route.js", error);
	}
};

export const DELETE = async (req, { params: { id } }) => {
	try {
		await DBConnection();

		const post = await PromptsSchema.findOneAndDelete(id);

		if (!post) return new Response("Invalide ID, app>api>prompt>id>route.js" + error, { status: 500 });

		return new Response(JSON.stringify("Success Deleted"), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Failed To GET Prompt app>api>prompt>id>route.js" + error, { status: 500 });
	}
};
