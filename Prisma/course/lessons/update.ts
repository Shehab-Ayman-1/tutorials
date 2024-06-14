import { PrismaClient, ROLE } from "@prisma/client";
import { currentProfile } from "./currentProfile";

const prisma = new PrismaClient();
export const Profile = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const updated = await prisma.profile.update({
		where: { id: profile.id, orgId: profile.orgId },
		data: { role: ROLE.MODERATOR },
	});

	console.log(updated);
};

export const Category = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const updated = await prisma.category.update({
		where: { id: "", orgId: profile.orgId },
		data: { name: "new name" },
	});
	console.log(updated);
};

export const Company = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const updated = await prisma.company.update({
		where: { id: "", categoryId: "", category: { orgId: profile.orgId } },
		data: { name: "new name" },
	});
	console.log(updated);
};

export const Product = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const updated = await prisma.product.update({
		where: { id: "", companyId: "", company: { category: { orgId: profile.orgId } } },
		data: { name: "new name" },
	});
	console.log(updated);
};

export const Transaction = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const updated = await prisma.transaction.update({
		where: { id: "", orgId: profile.orgId },
		data: { paid: 100 },
	});
	console.log(updated);
};
