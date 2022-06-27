import { v4 as randomUserID } from "uuid";

let users = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
	},
	{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
	},
	{
		id: 3,
		name: "Clementine Bauch",
		username: "Samantha",
		email: "Nathan@yesenia.net",
	},
];

export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
};

export const getUser = (req, res) => {
	const user = users.find((user) => user.id == req.params.id);
	console.log(user);
	res.send(user);
};

export const createUser = (req, res) => {
	const newUser = req.body;
	users.push({ id: randomUserID(), ...newUser });
	res.send(`User Width The Name [ ${newUser.name} ] Added To The Database.`);
};

export const deleteUser = (req, res) => {
	users = users.filter((user) => user.id != req.params.id);
	res.send(users);
};

export const updateUser = (req, res) => {
	const { name, username, email } = req.body;
	const user = users.find((user) => user.id == req.params.id);

	if (name) {
		user.name = name;
	} else if (username) {
		user.username = username;
	} else if (email) {
		user.email = email;
	}

	res.send(`User With The ID [ ${req.params.id} ] Has Been Updated`);
};
