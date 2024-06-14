import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const currentOrganization = async (orgId: string) => {
	const org = await prisma.organization.findUnique({ where: { id: orgId } });
	return org || null;
};

export const currentProfile = async (_email?: string, _orgId?: string) => {
	const email = _email || "shehab@gmail.com";
	const orgId = _orgId || "d8f724c4-d7a1-4e74-b022-e8c8115b42ca";

	const org = await currentOrganization(orgId);
	if (!org) return console.log({ error: "Organization Not Found", status: 400 });

	const profile = await prisma.profile.findFirst({ where: { email, orgId: org.id } });
	return profile || null;
};
