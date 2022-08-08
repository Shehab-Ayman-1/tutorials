export default function ReOpen() {
	// Homepage
	interface settings {
		theme?: boolean;
		font?: string;
	}

	const homePage: settings = {
		theme: true,
		font: "cursive",
		sidebar: true,
		external: true,
	};
	console.log(homePage);

	// Articles page
	interface settings {
		sidebar: boolean;
	}

	const articlesPage: settings = {
		sidebar: false,
		external: true,
	};

	console.log(articlesPage);

	// Contact
	interface settings {
		external: boolean;
	}

	const contactPage: settings = {
		sidebar: true,
		external: false,
	};

	console.log(contactPage);
}
