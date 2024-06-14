import { PrismaClient } from "@prisma/client";
import { currentProfile } from "./currentProfile";

const prisma = new PrismaClient();
export const Profile = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	console.log(profile);
};

export const Category = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 400 });

	const category = await prisma.category.delete({
		where: { id: "", orgId: profile.orgId },
	});
	console.log(category);
};

export const Company = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 400 });

	const company = await prisma.company.delete({
		where: { id: "", categoryId: "" },
	});

	console.log(company);
};

export const Product = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 400 });

	const product = await prisma.product.delete({
		where: { id: "", companyId: "" },
	});

	console.log(product);
};

export const Transaction = async () => {
	const able = false;
	if (!able) return;

	const transaction = await prisma.transaction.delete({
		where: { id: "", orgId: "" },
	});

	console.log(transaction);
};
