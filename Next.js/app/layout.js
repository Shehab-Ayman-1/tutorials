import { Navbar, Provider } from "@/layouts";
import "@/styles/globals.css";

export const metadata = {
	title: "Promptopia",
	description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">
						<Navbar />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
