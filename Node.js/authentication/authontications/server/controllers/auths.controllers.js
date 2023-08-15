import Auths from "../models/auths.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const LOGIN = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find User
		const auth = await Auths.findOne({ email });
		if (!auth) return res.status(400).json("This Email Is Not Currect.");

		// Compare Password
		const comparedPassword = await bcrypt.compare(password, auth.password);
		if (!comparedPassword) return res.status(400).json("This Password Is Not Currect.");

		// JWT Tokens
		const shortToken = jwt.sign({ email: auth.email, role: auth.role }, process.env.SHORT_TOKEN, { expiresIn: "15s" });
		const longToken = jwt.sign({ email: auth.email, role: auth.role }, process.env.LONG_TOKEN, { expiresIn: "1h" });
		res.cookie("short_token", shortToken, { httpOnly: true, maxAge: 1000 * 15 });
		res.cookie("long_token", longToken, { httpOnly: true, maxAge: 1000 * 60 * 60 });

		// Update Auth RefreshToken
		await Auths.findByIdAndUpdate(auth._id, { longToken }, { new: true });

		// Send To Client-Side
		const { password: p, longToken: l, role, ...rest } = auth._doc;
		res.status(200).json({ ...rest, shortToken, message: "Your Account Was Successfully Login." });
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const REGISTER = async (req, res) => {
	try {
		const { email, password } = req.body;

		const auth = await Auths.findOne({ email });
		if (auth) return res.status(400).json("This Auth Is Already Registered.");

		const hashedPassword = await bcrypt.hash(password, 10);
		const newAuth = new Auths({ ...req.body, password: hashedPassword, role: 2001 });
		await newAuth.save();

		res.status(200).json(`The Account Was Successfully Created.`);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const GET_AUTHS = async (req, res) => {
	try {
		const auths = await Auths.find();
		res.status(200).json(auths);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const GET_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		const auth = await Auths.findById(id);

		res.status(200).json(auth);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const UPDATE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		await Auths.findByIdAndUpdate(id, req.body, { new: true });

		res.status(200).json("The Auth Was Successfully Updated.");
	} catch (error) {
		res.status(404).json(error);
	}
};

export const DELETE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		await Auths.findByIdAndDelete(id);

		res.status(200).json("The Auth Was Successfully Deleted.");
	} catch (error) {
		res.status(404).json(error);
	}
};
