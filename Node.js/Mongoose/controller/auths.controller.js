import Auths from "../models/auths.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

		// JWT Token
		const accessToken = jwt.sign({ role: auth?.role }, process.env.ACCESS_TOKEN, { expiresIn: "60s" });

		// Cookies
		const cookie = res.cookie("access_token", accessToken, { httpOnly: true, maxAge: 60 * 1000 });

		const { password: p, role, ...rest } = auth._doc;
		cookie.status(200).json(rest);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const REGISTER = async (req, res) => {
	try {
		const { password, ...body } = req.body;

		const hashPassword = await bcrypt.hash(password, 10);
		const newAuth = await Auths.create({ ...body, password: hashPassword });

		res.status(200).json(newAuth);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const GET_AUTHS = async (req, res) => {
	try {
		let auths = await Auths.find();
		res.status(200).json(auths);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const UPDATE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;

		const updatedAuth = await Auths.findByIdAndUpdate(id, body, { new: true });

		res.status(200).json(updatedAuth);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const DELETE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		await Auths.findByIdAndDelete(id);

		res.status(200).json("The Auth Was Deleted.");
	} catch (error) {
		res.status(404).json(error);
	}
};
