const data = [
	{
		_id: 1,
		fName: "shehab",
		lName: "ayman",
		nickName: "shehab A",
		age: 21,
	},
	{
		_id: 2,
		fName: "hesham",
		lName: "mohamed",
		nickName: "hesham m",
		age: 21,
	},
	{
		_id: 3,
		fName: "aya",
		lName: "mahmoud",
		nickName: "aya m",
		age: 21,
	},
	{
		_id: 4,
		fName: "rahma",
		lName: "mostafa",
		nickName: "rahma m",
		age: 21,
	},
];

const handler = (req, res) => {
	res.status(200).json(data);
};

export default handler;
