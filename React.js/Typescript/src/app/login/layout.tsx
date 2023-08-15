import type { Metadata } from "next";
import { Header, Footer } from "@/layouts";

export const metadata: Metadata = {
	title: "Login",
};

type children = {
	children: React.ReactNode;
};

function Layout({ children }: children) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
export default Layout;
