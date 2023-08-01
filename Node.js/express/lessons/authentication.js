import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let __dirname = process.cwd();
let auths = JSON.parse(readFileSync(join(__dirname, "public", "api", "auths.json"), "utf8") || []);

export const getAuths = (req, res) => {
	try {
		res.status(200).json(auths);
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

export const getAuth = (req, res) => {
	try {
		const { id } = req.params;

		const auth = auths.find((auth) => auth.id === id);
		if (!auth) return res.status(403).json({ status: 403, message: "User ID Not Defined." });

		res.status(200).json(auth);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const register = async (req, res) => {
	try {
		const { username, password, ...body } = req.body;
		if (!username || !password) return res.status(500).json({ status: 500, message: "Username And Password Are Required." });

		const isDublicated = auths.find((auth) => auth.username === username);
		if (isDublicated) return res.status(500).json({ status: 500, message: "This Username Is Already Registered." });

		const hashed = await bcrypt.hash(password, 10);
		const auth = { id: new Date().getTime().toString(36), username, password: hashed, roles: { user: 2001 }, ...body };

		auths.push(auth);
		writeFileSync(join(__dirname, "public", "api", "auths.json"), JSON.stringify(auths, null, 3), "utf8");

		res.status(200).json(auth);
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

export const login = async (req, res) => {
	try {
		let { username, password } = req.body;
		if (!username || !password) return res.status(500).json({ status: 500, message: "Username And Password Are Required." });

		let auth = auths.find((auth) => auth.username === username);
		if (!auth) return res.status(500).json({ status: 500, message: "This User Is Not Registered." });

		// bcrypt Encryption
		let isPasswordCurrect = await bcrypt.compare(password, auth.password);
		if (!isPasswordCurrect) return res.status(500).json({ status: 500, message: "This Password Is Not Currect." });

		// JWT
		let accessToken = jwt.sign({ id: auth?.id, username, roles: Object.values(auth?.roles) }, process.env.ACCESS_TOKEN, { expiresIn: "30s" });
		let refreshToken = jwt.sign({ id: auth?.id, username, roles: Object.values(auth?.roles) }, process.env.REFRESH_TOKEN, { expiresIn: "1d" });

		let otherAuths = auths.filter((auth) => auth.username !== username);
		auths = [...otherAuths, { ...auth, refreshToken }];

		writeFileSync(join(__dirname, "public", "api", "auths.json"), JSON.stringify(auths, null, 3));

		// Send The Refresh Token To The Client, And He Now Can To Get The User Details By This Token Because It Have The User Info In The Database
		let day = 24 * 60 * 60 * 1000;
		res.cookie("my_access_token", refreshToken, { httpOnly: true, maxAge: day, sameSite: "None", secure: true });

		res.status(200).json({ accessToken });
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};
