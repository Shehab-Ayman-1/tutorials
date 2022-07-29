import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => res.send("<h1>Go To <span style='color: red'> /users </span> Route To See Users API</h1>"));

app.listen(PORT, () => console.log(`Server Is Running In http://localhost:${PORT}`));
