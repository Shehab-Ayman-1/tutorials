export const filters = {
	uppercase: (text) => text.toUpperCase(),

	reversing: (text) => text.split("").reverse().join(""),

	zFill: (input = 0, count = 1) => {
		if (isNaN(input)) {
			console.error("String Input Is Now Available Value.");
			return input;
		}
		if (isNaN(count)) {
			console.error("Count Must To Be A Number.");
			return input;
		}
		const number = String(input);
		const num = String(number).split("");

		const zeros = String(number).length > +count ? 0 : Math.abs(String(number).length - +count);
		num.unshift("0".repeat(zeros));

		return num.join("");
	},

	limitText: (text, limit = 200) => {
		if (!text) {
			console.error("Text Is Requires Paramater.");
			return "";
		}
		return `${text.slice(0, limit)}...`;
	},
};
