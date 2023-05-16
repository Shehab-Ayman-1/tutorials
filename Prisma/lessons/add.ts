import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createMany = async () => {
	// data           -> Append The Body Of The Data
	// skipDuplicates -> Use To Remote The Dublicated Users, And If All Users Are Exists Before -> Will Not Add Any One
	let wantToCreate = true;
	if (!wantToCreate) return;

	let users = await prisma.user.createMany({
		data: [
			{
				name: "shehab 1",
				age: 21,
				email: "shehabayman351@gmail.com",
				skills: ["html", "css", "js"],
				roles: "ADMIN",
			},
			{
				name: "shehab 2",
				age: 22,
				email: "shehabayman352@gmail.com",
				skills: ["html", "css", "js"],
				roles: "ADMIN",
			},
			{
				name: "shehab 3",
				age: 23,
				email: "shehabayman353@gmail.com",
				skills: ["html", "css", "js"],
				roles: "ADMIN",
			},
			{
				name: "shehab 4",
				age: 23,
				email: "shehabayman354@gmail.com",
				skills: ["html", "css", "js"],
				roles: "ADMIN",
			},
		],
		skipDuplicates: true,
	});
	console.log(users);
};

export const createOne = async () => {
	// - data    -> Append The Body Of The Data
	// - include -> Use To Append The Relations Keys [Just Use If Select Is Not Use]
	// - select  -> Use To Limit The Keys That Will Returns [Can To Work As Include Key]
	let wantToCreate = true;
	if (!wantToCreate) return;

	let user = await prisma.user.create({
		data: {
			name: "shehab",
			age: 22,
			email: "shehabayman350@gmail.com",
			skills: ["html", "css", "js"],
			roles: "ADMIN",
			userPrefrence: { create: { emailUpdated: true } },
			favPosts: {
				create: {
					title: "post name",
					rating: 2.5,
				},
			},
		},
		include: { userPrefrence: true, favPosts: true },
	});
	console.log(user);
};
