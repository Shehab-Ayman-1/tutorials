import { METHOD, PERSON, PLACE, PrismaClient, ROLE } from "@prisma/client";
import { currentOrganization, currentProfile } from "./currentProfile";

const prisma = new PrismaClient({ errorFormat: "minimal" });
export const Organization = async () => {
	const able = false;
	if (!able) return;

	const org = await prisma.organization.create({
		data: { name: "Market Store", imageUrl: "https://info-manage-client.netlify.app" },
	});

	console.log(org);
};

export const Profile = async () => {
	const able = false;
	if (!able) return;

	const org = await currentOrganization("8090ef03-d505-499a-b403-0ba4ea2b5e1a");
	if (!org) return console.log({ create: "Organization Not Found", status: 400 });

	const profile = await prisma.profile.create({
		data: {
			imageUrl: "https://info-manage-client.netlify.app",
			orgId: org.id,
			userId: `userId_${new Date().getTime()}`,
			name: "youssef ragab",
			email: "youssef@gmail.com",
			phone: "01554566092",
			role: ROLE.ADMIN,
		},
	});

	console.log(profile);
};

export const Category = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const category = await prisma.category.create({
		data: { orgId: profile.orgId, name: "تيل فرامل" },
	});
	console.log(category);
};

export const Company = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const company = await prisma.company.create({
		data: {
			categoryId: "45a498e9-6a3e-4ec8-b8e1-a918bed2beda",
			name: "تيل نص نقل",
		},
	});
	console.log(company);
};

export const Product = async () => {
	const able = false;
	if (!able) return;

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	const company = await prisma.company.findUnique({
		where: {
			categoryId: "5046d5c0-56ad-436c-8765-d82b436f9bae",
			id: "d12b4b28-fc0c-4a80-8b32-07930f0ae5cb",
		},
	});
	if (!company) return console.log({ error: "Company Not Found", status: 400 });

	const product = await prisma.product.create({
		data: {
			companyId: company.id,
			name: "البركة صغير",
			barcode: 1,
			count: 10,
			min: 5,
			max: 10,
			place: PLACE.STORE,
			price: 120,
		},
	});
	console.log(product);
};

export const Transaction = async () => {
	const able = false;
	if (!able) return;

	const products = [
		{ id: "1", companyId: "", name: "سبيرو سباتس برتقال", count: 2, place: PLACE.STORE, sellingPrice: 15 },
		{ id: "2", companyId: "", name: "سبيرو سباتس فراولة", count: 3, place: PLACE.STORE, sellingPrice: 20 },
		{ id: "3", companyId: "", name: "سبيرو سباتس تفاح", count: 4, place: PLACE.STORE, sellingPrice: 25 },
	];

	const profile = await currentProfile();
	if (!profile) return console.log({ error: "Unauthorized", status: 401 });

	// TODO: Decrease The Products Count In The Products Collection

	const transaction = await prisma.transaction.create({
		data: {
			orgId: profile.orgId,
			paid: 100,
			method: METHOD.CASH,
			persons: {
				create: {
					name: "سيد سبيرو سباتس",
					phone: 1554566092,
					type: PERSON.CLIENT,
				},
			},
			transactionProducts: {
				createMany: {
					data: products,
				},
			},
		},
	});

	console.log(transaction);
};
