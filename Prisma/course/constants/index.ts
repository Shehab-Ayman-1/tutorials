import { ROLE } from "@prisma/client";

export const usersData = [
	{
		name: "shehab",
		age: 21,
		email: "shehab@gmail.com",
		skills: ["html", "css", "js"],
		role: ROLE.ADMIN,
	},
	{
		name: "hesham",
		age: 22,
		email: "hesham@gmail.com",
		skills: ["react.js", "next.js", "node.js"],
		role: ROLE.USER,
	},
	{
		name: "aya",
		age: 23,
		email: "aya@gmail.com",
		skills: ["php", "mysql", "laravel"],
		role: ROLE.MODERATOR,
	},
];
