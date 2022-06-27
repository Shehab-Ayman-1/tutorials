import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
	res.send("Hello From Home Page");
});

app.listen(PORT, () => console.log(`Server Is Running In http://localhost:${PORT}`));
