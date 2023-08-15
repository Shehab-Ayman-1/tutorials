import jwt from "jsonwebtoken";

export const verifyLogin = async (req, res, next) => {
	try {
		const { access_token } = req.cookies;
		if (!access_token) return res.status(401).json({ status: 401, message: "User Not Authenticated.", cookies: req.cookies });

		jwt.verify(access_token, process.env.ACCESS_TOKEN, (error, info) => {
			if (error) return res.status(403).json({ status: 403, message: "JWT Verify Error", error });
			req.user = info;
		});

		next();
	} catch (error) {
		res.status(404).json(error);
	}
};

export const verifyRoles = (...allowedAuths) => {
	return (req, res, next) => {
		try {
			let allowed = allowedAuths.includes(req.user.role);
			if (!allowed) return res.status(403).json({ status: 403, message: "This Auth Is Not Allowed." });

			next();
		} catch (error) {
			res.status(404).json(error);
		}
	};
};
