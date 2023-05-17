import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const deleteRecipe = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "PUT") return res.status(404).json("This Method Is Not PUT");

	let { id, ...body } = req.body;

	const saving = await prisma.reciepes.update({
		where: { id },
		data: body,
	});

	res.status(200).json(saving);
};

export default deleteRecipe;
