import { findAll, findOne } from "../lessons";
import { createOne, createMany } from "../lessons";
import { deleteAll, deleteOne } from "../lessons";
import { updateAll, updateOne } from "../lessons";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Every Thing About Prisma Will Be Written Here
async function main() {
	// await findAll();
	// await findOne();
	// await createMany();
	// await createOne();
	// await updateAll();
	// await updateOne();
	// await deleteAll();
	// await deleteOne();
}

(async function () {
	try {
		await main();
	} catch (error) {
		console.log(error);
	} finally {
		prisma.$disconnect();
	}
})();
