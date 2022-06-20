const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express().json());

app.post("/api/users/", (request, result) => {
	setTimeout(() => {
		result.send(request.body);
	}, 1000);
});

app.get("/api/users/", (request, result) => {
	setTimeout(() => {
		const users = [];
		return result.send(users);
	}, 1000);
});

app.put("/api/users/:id", (request, result) => {
	setTimeout(() => {
		const user = request.body;
		console.log(user);
		return result.send(user);
	}, 1000);
});

app.delete("/api/users/:id", (request, result) => {
	setTimeout(() => {
		const user = request.body;
		console.log(user);
		return result.send(user);
	}, 1000);
});

app.listen("5000", () => console.log("My Server Is Running on port 5000"));
