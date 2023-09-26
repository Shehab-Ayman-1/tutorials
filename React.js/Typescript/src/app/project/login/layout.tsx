import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

type children = {
	children: React.ReactNode;
};

function Layout({ children }: children) {
	return children;
}
export default Layout;
