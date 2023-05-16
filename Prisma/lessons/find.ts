import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
	// select  -> Using To Limit The Return Keys
	// include -> Usint To Import The Relations Keys
	// distinct -> Using To Filter The Dublicated Value Like set()
	// take -> Using To Limit The Number Of Returned Documents
	// skip -> Using To Skip The First [No]
	// orderBy -> Using To Sort The Returned Array

	let _users = await prisma.user.findMany();
	let users = await prisma.user.findMany({
		where: {
			NOT: { name: "shehab 1" },
			age: {
				// equals: 21,
				// not: 22,
				// gt: 22,
				// lt: 23,
				// in: [21, 22],
			},
			name: {
				// not: "shehab 1",
				// in: ["shehab 1", "shehab 2"],
			},
			email: {
				// contains: "@gmail.com",
				// startsWith: "shehabayman350",
				// endsWith: ".com",
			},
			favPosts: {
				// every: { title: "post name" },
				// some: { title: "post name" },
				// none: { title: "post name" },
			},
		},
		include: { favPosts: true, userPrefrence: true },
		// select: {age: true},
		// distinct: ['age'],
		// take: 20,
		// skip: 3,
		// orderBy: { name: "asc" },
	});
	console.log(users);
};

export const findOne = async () => {
	// where -> Get The Unique Document That Matching This { key: value }

	let uniqueUser = await prisma.user.findUnique({
		where: { name_age: { name: "shehab", age: 22 } },
	});

	let _findOne = await prisma.user.findFirst({
		where: { name: "shehab" },
	});

	console.log(_findOne);
};
