import type { Metadata } from "next";
import "@/assets/css/globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Generated by create next app",
};

type children = {
	children: React.ReactNode;
};

function Layout({ children }: children) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
export default Layout;
