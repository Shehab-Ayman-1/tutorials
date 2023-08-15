/* Important Note:
	We Have To Ways To Access The Data By The Tokens
	- [1] Using [Cookies] To Store The Access Token [Short Token] While Login Then Use It To Verify The Token In JWT
	- [2] Using [Authorization] By Sending The Access Token [Short Token] To The Client-Side, Then Recieve This Token Again While Using verifyLogin
	verifyLogin  -> Using To Check If The Auth Is Login Or Not, Then Put His Info In The Req
	refreshToken -> Using To Create A New Token To Allow The Auth Access The Server API Routes
	verifyLogout -> Using To Clear All The Tokens From The Auth DB, And The Cookies
	verifyRoles  -> Using To Allowed The Selected Roles To Access The Target Route
*/

import jwt from "jsonwebtoken";
import Auths from "../models/auths.model.js";

// [1] Using Cookies
export const verifyLogin = (req, res, next) => {
	try {
		const { short_token } = req.cookies;
		if (!short_token) return res.status(401).json("verifyLogin: Short Token Cookie Is Expired.");

		jwt.verify(short_token, process.env.SHORT_TOKEN, (error, info) => {
			if (error) return res.status(400).json(`verifyLogin: Error [${error.message}]`);
			req.auth = info;
		});

		next();
	} catch (error) {
		res.status(500).json(error.message);
		console.log(error.message);
	}
};

// [2] Using Authorization
export const _verifyLogin = (req, res, next) => {
	try {
		const shortToken = req.headers["Authorization"] || req.headers["authorization"];
		if (!shortToken) return res.status(401).json(`verifyLogin: Short Token Not Found.`);

		const [bearer, token] = shortToken.split(" ");

		jwt.verify(token, process.env.SHORT_TOKEN, (error, info) => {
			if (error) return res.status(400).json(`verifyLogin Error: ${error.message}`);
			req.auth = info;
		});

		next();
	} catch (error) {
		res.status(500).json(error.message);
		console.log(error.message);
	}
};

export const verifyLogout = (req, res) => {
	try {
		const { long_token } = req.cookies;
		if (!long_token) return res.status(401).json(`verifyLogout: Error [Long Token Not Found]`);

		// Clear Tokens From DB
		jwt.verify(long_token, process.env.LONG_TOKEN, async (error, info) => {
			if (error) return res.status(400).json(`verifyLogout: Error ${error.message}`);
			await Auths.findOneAndUpdate({ email: info.email }, { longToken: "" }, { new: true });
		});

		// Clear Tokens From Cookies
		res.clearCookie("short_token", { httpOnly: true, maxAge: 1000 * 15 });
		res.clearCookie("long_token", { httpOnly: true, maxAge: 1000 * 60 * 60 });

		return res.status(200).json(`The Account Was Logged Out`);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const refreshToken = (req, res) => {
	try {
		const { long_token } = req.cookies;
		if (!long_token) return res.status(401).json("refreshToken: Error [longToken Is Expired].");

		jwt.verify(long_token, process.env.LONG_TOKEN, (error, info) => {
			if (error) return res.status(400).json(`refreshToken: Error ${error.message}`);

			const newShortToken = jwt.sign({ email: info.email, role: info.role }, process.env.SHORT_TOKEN, { expiresIn: "15s" });

			res.cookie("short_token", newShortToken, { httpOnly: true, maxAge: 1000 * 15 });
			return res.status(200).json(newShortToken);
		});
	} catch (error) {
		res.status(500).json(error.message);
		console.log(error.message);
	}
};

export const verifyRoles = (...allowedRoles) => {
	try {
		return (req, res, next) => {
			const isAllowed = allowedRoles.some((role) => role === req.auth?.role);
			if (!isAllowed) return res.status(403).json("This Auth Is Not Allowed.");

			next();
		};
	} catch (error) {
		res.status(500).json(error.message);
		console.log(error.message);
	}
};
