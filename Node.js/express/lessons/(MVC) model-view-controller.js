import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const __dirname = process.cwd();
const users = JSON.parse(readFileSync(join(__dirname, "public", "api", "users.json"), "utf8") || []);

export const sendFile = (req, res) => {
	res.sendFile(join(__dirname, "views", "index.html"));
};

export const getUsers = (req, res) => {
	res.status(200).json(users);
};

export const getUser = (req, res) => {
	let { id } = req.params;
	let user = users.find((user) => user.id === id);

	if (user) res.status(200).json(user);
	else res.status(200).json({ state: 500, message: "This User Not Found." });
};

export const getUsersByLimit = (req, res) => {
	let { limit } = req.query;
	let limitedUsers = users.slice(0, +limit);
	res.status(200).json(limitedUsers);
};

export const createUser = (req, res) => {
	let body = req.body;

	users.push({ id: new Date().getTime().toString(36), ...body });
	writeFileSync(join(__dirname, "public", "api", "users.json"), JSON.stringify(users, null, 3));

	res.status(200).json(users);
};

export const updateUser = (req, res) => {
	let body = req.body;
	let { id } = req.params;

	let user = users.find((user) => user.id === id);
	if (!user) return res.status(500).json({ state: 500, message: "User ID Is Not Currect." });
	user = { ...user, ...body };

	let userIndex = users.findIndex((user) => user.id === id);
	users.splice(userIndex, 1, user);

	writeFileSync(join(__dirname, "public", "api", "users.json"), JSON.stringify(users, null, 3));
	res.status(200).json(users);
};

export const deleteUser = (req, res) => {
	let { id } = req.params;

	let index = users.findIndex((user) => user.id === id);
	users.splice(index, 1);

	writeFileSync(join(__dirname, "public", "api", "users.json"), JSON.stringify(users, null, 3));
	res.status(200).json(users);
};

export const page404 = (req, res) => {
	res.sendFile(join(__dirname, "views", "404.html"));
};
