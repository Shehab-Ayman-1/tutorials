import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

export const configs = (app) => {
	dotenv.config();
	app.use(express.static("./public"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true, limit: "10mb" }));
	app.use(cookieParser());
	app.listen(process.env.PORT, () => console.log(`Server Is Connected [http://localhost:${process.env.PORT}]`));
};
