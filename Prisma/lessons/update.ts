import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateAll = async () => {
	// where -> The Old Data That Want To Update
	// data -> The New Data That Want To Update

	let user = await prisma.user.updateMany({
		where: {
			roles: "ADMIN",
		},
		data: {
			roles: "BASIC",
		},
	});
	console.log(user);
};

export const updateOne = async () => {
	// where -> The Old Data That Want To Update
	// data -> The New Data That Want To Update
	// disconnect -> Using To Remove The UserPerformance Key

	let user = await prisma.user.update({
		where: {
			email: "shehabayman354@outlook.com",
		},
		data: {
			email: "shehabayman354@outlook.com",
			age: 10,
			skills: ["React", "Next.js", "MongoDB"],
			userPrefrence: {
				// disconnect: true, // { userPerformance: null }
				// create: { emailUpdated: true },
			},
		},
		include: { userPrefrence: true },
	});
	console.log(user);
};
