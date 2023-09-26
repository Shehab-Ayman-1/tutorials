import type { Metadata } from "next";
import { Header, Footer } from "@/layouts";

export const metadata: Metadata = {
	title: "Home",
};

type Children = {
	children: React.ReactNode;
};

function Layout({ children }: Children) {
	const navLinks = [
		{ path: "/", name: "Go Back" },
		{ path: "/project/home", name: "Home" },
		{ path: "/project/about", name: "About" },
		{ path: "/project/products", name: "Products" },
		{ path: "/project/login", name: "Login" },
		{ path: "/project/register", name: "Register" },
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
