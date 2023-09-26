export function ImplementInterface() {
	interface settings {
		theme: boolean;
		font?: string;
		save: () => void;
	}

	class Page implements settings {
		constructor(public username: string, public theme: boolean, public font: string) {}
		save = (): void => {
			console.log("save");
		};
		update = (): void => {
			console.log("update");
		};
	}

	const page = new Page("shehab", true, "open sans");
	console.log(page);
}
