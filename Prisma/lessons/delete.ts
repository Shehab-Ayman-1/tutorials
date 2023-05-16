import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const deleteAll = async () => {
	let wantToDelete = true;
	if (!wantToDelete) return;

	let _users = await prisma.user.deleteMany();
	let users = await prisma.user.deleteMany({
		where: {
			age: { gte: 23 },
		},
	});
	console.log(users);
};

export const deleteOne = async () => {
	// delete => Is Just Work On A Unique Keys

	let wantToDelete = true;
	if (!wantToDelete) return;

	let user = await prisma.user.delete({
		where: {
			email: "shehabayman351@gmail.com",
		},
	});
	console.log(user);
};
