import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") return res.status(404).json("This Method Is Not Post");

	const saving = await prisma.reciepes.create({ data: { region: req.body } });

	res.status(200).json(saving);
};

export default createRecipes;
