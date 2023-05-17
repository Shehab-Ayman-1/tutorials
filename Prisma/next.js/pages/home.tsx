import { AddOne, GetAll } from "@/components";
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
	let prisma = new PrismaClient();
	let recipes = await prisma.reciepes.findMany();
	return { props: { recipes } };
}

type recipesType = { id: string; region: string };
export default function HomePage({ recipes }: { recipes: recipesType[] }) {
	return (
		<main>
			<AddOne />
			<GetAll recipes={recipes} />
		</main>
	);
}
