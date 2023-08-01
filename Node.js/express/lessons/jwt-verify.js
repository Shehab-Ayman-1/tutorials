/**
 * JWT(json web token)
 * - Using To Send Data To The Client In Encrypted Token
 * - Store The Data In The Memory
 * verify(token, secret, callback)
 * - Using To Solve The Encrypted Token And Controll In The Encrypted Data
 * Sign(data, secret, options?)
 * - Using To Convert The Data To The Encrypted Token
 */

import jwt from "jsonwebtoken";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const __dirname = process.cwd();
const auths = JSON.parse(readFileSync(join(__dirname, "public", "api", "auths.json"), "utf8") || []);

export const verifyLogin = (req, res, next) => {
	try {
		const authorization = req.headers.authorization || req.headers.Authorization; // Make The Client Send The accessToken To The Server By Auth>Bearer
		if (!authorization.startsWith("Bearer ")) return res.status(401).json({ status: 401, message: "Please Login To Continue" });

		const [bearer, token] = authorization.split(" ");
		jwt.verify(token, process.env.ACCESS_TOKEN, (error, info) => {
			if (error) return res.status(401).json({ status: 401, message: "JWT Verity Error", error });
			req.user = info;
		});
		next();
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

export const verifyRefresh = (req, res, next) => {
	try {
		const { my_access_token } = req.cookies;
		if (!my_access_token) res.status(401).json({ status: 401, message: "Not Registered.", cookies: req.cookies });

		const auth = auths.find((auth) => auth.refreshToken === my_access_token);
		if (!auth) return res.status(403).json({ status: 403, message: "Auth Token Not Defined In The Database." });

		jwt.verify(my_access_token, process.env.REFRESH_TOKEN, (err, { username, roles }) => {
			if (err || username !== auth.username) return res.status(403).json({ status: 403, message: "JWT Verify Error.", info });
			const accessToken = jwt.sign({ username, roles }, process.env.ACCESS_TOKEN, { expiresIn: "30s" });
			res.status(200).json({ accessToken });
		});

		next();
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

export const verifyLogout = (req, res) => {
	try {
		const { my_access_token } = req.cookies;
		if (!my_access_token) return res.status(204).json({ status: 204, message: "Not Defined The Cookie." });
		const auth = auths.find((auth) => auth.refreshToken === my_access_token);

		if (!auth) {
			const day = 24 * 60 * 60 * 1000;
			res.clearCookie("my_access_token", { httpOnly: true, maxAge: day, sameSite: "None", secure: true });
			res.status(403).json({ status: 403, message: "This Refresh Token Not Found In The Database." });
		}

		const authIndex = auths.findIndex((person) => person.refreshToken === auth.refreshToken);
		delete auths[authIndex].refreshToken;

		writeFileSync(join(__dirname, "public", "api", "auths.json"), JSON.stringify(auths, null, 3), "utf8");

		res.status(200).json(auths);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const verifyRoles = (...allowedRoles) => {
	return (req, res, next) => {
		try {
			let isAccepted = req.user.roles.some((role) => allowedRoles.includes(role));
			if (!isAccepted) return res.status(403).json({ status: 403, message: "User Role Not Acceptable." });

			next();
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	};
};
