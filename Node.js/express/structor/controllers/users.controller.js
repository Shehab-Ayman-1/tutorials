let users = [
	{ id: 100, name: "shehab", email: "she@oo.org" },
	{ id: 101, name: "hesham", email: "hes@oo.org" },
	{ id: 102, name: "aya", email: "aya@oo.org" },
	{ id: 103, name: "salma", email: "sal@oo.org" },
	{ id: 104, name: "rahma", email: "rah@oo.org" },
];

export const GET_USERS = async (req, res) => {
	try {
		res.status(201).json(users);
	} catch (error) {}
};

export const GET_USER = async (req, res) => {
	let checker = users.find((user) => user.id === +req.params.id);

	if (!checker) return res.status(404).json({ GET_ONE_USER: "Sorry, This User Is Not Defined" });

	res.status(200).json({
		query: req.query, // http://localhost:5000/100/shehab?min=0&max=100 {"min": "0", "max": "100"}
		min: req.query.min,
		max: req.query.max,

		params: req.params,
		id: req.params.id,
		name: req.params.name,

		middleWare: req.currentTime,
	});
};

export const POST_USER = async (req, res) => {
	if (!req.body.name || !req.body.email) return res.status(400).json({ error: "Name And Email Are Required" });

	let checker = users.find((user) => user.name === req.body.name);
	if (checker) return res.status(400).json({ error: "This User Is Already Exist" });

	let newUser = { id: users[users.length - 1].id + 1, name: req.body.name, email: req.body.email };
	users.push(newUser);
	res.status(200).json({ newUser });
};

export const UPDATE_USER = async (req, res) => {
	if (!req.params.id) return req.status(400).json({ Error: "User ID Is Required" });

	let user = users.find((user) => user.id === +req.params.id);
	if (!user) return res.status(400).json({ Error: "Name OR Email Is Required" });

	user.name = req.body.name ? req.body.name : user.name;
	user.email = req.body.email ? req.body.email : user.email;
	res.status(200).json(user);
};

export const DELETE_USER = async (req, res) => {
	if (!req.params.id) return res.status(400).json({ Error: "User ID Is Required" });

	let userIndex = users.findIndex((user) => user.id === +req.params.id);
	if (userIndex === -1) return res.status(400).json({ Error: "This User Is Not Defined" });

	users.splice(userIndex, 1);
	res.status(200).send(users[userIndex]);
};
