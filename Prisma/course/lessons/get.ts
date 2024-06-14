import { PrismaClient } from "@prisma/client";
import { currentProfile } from "./currentProfile";

const prisma = new PrismaClient();
export const Category = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const categories = await prisma.category.findMany({
		where: { orgId: profile.orgId },
	});
	console.log(categories);
};

export const Company = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const company = await prisma.category.findUnique({
		where: {
			id: "5046d5c0-56ad-436c-8765-d82b436f9bae",
			orgId: profile.orgId,
		},
		include: { companies: true },
	});
	console.log(company);
};

export const Product = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const products = await prisma.company.findUnique({
		where: {
			id: "e7a2e449-4633-4fd4-8713-87e36f899764",
			categoryId: "2d5a0373-e18c-4b62-be84-3a71327353a2",
		},
		include: { Product: true },
	});
	console.log(products);
};

export const Transaction = async () => {
	const able = true;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const transactions = await prisma.transaction.findMany({
		where: { orgId: profile.orgId },
		include: { transactionProducts: true, persons: true },
	});
	console.log(transactions);
	console.log(transactions[0].persons);
	console.log(transactions[0].transactionProducts);
};
