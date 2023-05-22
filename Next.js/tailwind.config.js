/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./layouts/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				"primary-orange": "#FF5722",
			},
		},
	},
	plugins: [],
};
