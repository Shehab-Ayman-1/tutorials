export const arrays = () => {
	let friends = ["ahmed", "sayed", "ali", "maysa", ["shehab", ["hesham", "aya"]]];

	let [a, b = "salma", , c, d] = friends;
	console.table({ a, b, c, d: d[0], e: d[1][1] });
};

export const objects = () => {
	let user = {
		name: "shehab",
		age: 21,
		skills: ["html", "css", "js"],
		country: { egypt: "alex", usa: "Newyork" },
	};

	let {
		name,
		age,
		skills,
		skills: [, two],
		country: { usa },
		color: co = "black",
	} = user;
	console.table({ name, age, skills: skills.join(" | "), "skills[1]": two, country: usa, fav: co });
};
