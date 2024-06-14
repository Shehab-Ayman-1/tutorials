import { PrismaClient } from "@prisma/client";
import * as GET from "./lessons/get";
import * as CREATE from "./lessons/create";
import * as UPDATE from "./lessons/update";
import * as DELETE from "./lessons/delete";

const prisma = new PrismaClient();
const main = async () => {
	try {
		await prisma.$connect();

		// GET
		await GET.Category();
		await GET.Company();
		await GET.Product();
		await GET.Transaction();

		// CREATE
		await CREATE.Organization();
		await CREATE.Profile();
		await CREATE.Category();
		await CREATE.Company();
		await CREATE.Product();
		await CREATE.Transaction();

		// UPDATE
		await UPDATE.Profile();
		await UPDATE.Category();
		await UPDATE.Company();
		await UPDATE.Product();
		await UPDATE.Transaction();

		// DELETE
		await DELETE.Profile();
		await DELETE.Category();
		await DELETE.Company();
		await DELETE.Product();
		await DELETE.Transaction();
	} catch (error) {
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
};

main();
