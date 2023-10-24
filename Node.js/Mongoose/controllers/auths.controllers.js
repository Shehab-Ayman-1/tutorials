import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auths from "../models/auths.model.js";

export const LOGIN = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) return res.status(403).json({ status: 403, message: "Email And Password Are Required Fields" });

		// Find Auth
		const auth = await Auths.findOne({ email });
		if (!auth) return res.status(403).json({ status: 403, message: "This Email Is Not Currect." });

		// Compare Password
		const compare = await bcrypt.compare(password, auth.password);
		if (!compare) return res.status(403).json({ status: 403, message: "Password Not Currect." });

		// Create Token
		const accessToken = jwt.sign({ role: auth?.role }, process.env.ACCESS_TOKEN, { expiresIn: "1h" });

		// Cookies
		const cookie = res.cookie("access_token", accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60 });

		const { password: p, role, ...rest } = auth._doc;
		cookie.status(200).json(rest);
	} catch (reason) {
		res.status(404).json(`LOGIN: ${reason.message}`);
	}
};

export const REGISTER = async (req, res) => {
	try {
		const { password, ...body } = req.body;

		// Check Email Verified
		const exists = await Auths.exists({ email: body.email });
		if (exists) return res.status(401).json({ status: 401, error: "This Email Is Already Exist." });

		// Hashing Password
		const hashPassword = await bcrypt.hash(password, 10);
		const newAuth = await Auths.create({ ...body, password: hashPassword });

		res.status(200).json(newAuth);
	} catch (reason) {
		res.status(404).json(`REGISTER: ${reason.message}`);
	}
};

export const GET_AUTHS = async (req, res) => {
	try {
		let auths = await Auths.find();
		res.status(200).json(auths);
	} catch (reason) {
		res.status(404).json(`GET_AUTHS: ${reason.message}`);
	}
};

export const UPDATE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		const body = req.body;
		const updatedAuth = await Auths.findByIdAndUpdate(id, body, { new: true });

		res.status(200).json(updatedAuth);
	} catch (reason) {
		res.status(404).json(`UPDATE_AUTH: ${reason.message}`);
	}
};

export const DELETE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;
		await Auths.findByIdAndDelete(id);

		res.status(200).json("The Auth Was Deleted.");
	} catch (reason) {
		res.status(404).json(`DELETE_AUTH: ${reason.message}`);
	}
};
