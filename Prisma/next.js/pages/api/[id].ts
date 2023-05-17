import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteRecipe = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "DELETE") return res.status(404).json("This Method Is Not DELETE");

	const where: { id: any } = { id: req.query.id };
	const saving = await prisma.reciepes.delete({ where });

	res.status(200).json(saving);
};

export default deleteRecipe;
