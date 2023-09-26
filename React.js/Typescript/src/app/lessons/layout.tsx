import type { Metadata } from "next";
import { Header, Footer } from "@/layouts";

export const metadata: Metadata = {
	title: "Home",
};

type children = {
	children: React.ReactNode;
};

function Layout({ children }: children) {
	const navLinks = [
		{ path: "/", name: "Go Back" },
		{ path: "/lessons/data-types", name: "Data Types" },
		{ path: "/lessons/hooks", name: "Hooks" },
		{ path: "/lessons/elements", name: "Elements" },
		{ path: "/lessons/generic", name: "Generic" },
	];

	return (
		<>
			<Header navLinks={navLinks} />
			{children}
			<Footer />
		</>
	);
}
export default Layout;
