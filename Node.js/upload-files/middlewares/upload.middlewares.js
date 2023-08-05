import { extname } from "path";

export const checkExists = (req, res, next) => {
	try {
		const files = req.files;
		if (!files) return res.status(400).json({ status: 400, message: "No Files Was Recieved." });

		next();
	} catch (error) {
		res.status(404).json(error);
	}
};

export const checkSize = (req, res, next) => {
	try {
		let files = req.files;
		let MB = 5;
		let size = MB * 1024 * 1024;
		let filesOverLimited = [];

		// Check If Their Is Files Over The Limites
		Object.keys(files).forEach((key) => {
			if (files[key].size > size) {
				filesOverLimited.push(files[key].name);
			}
		});

		if (filesOverLimited.length) {
			let properVerb = filesOverLimited > 1 ? "are" : "is";
			let sentance = `Upload Failed; ${filesOverLimited.toString()} ${properVerb} Over The File Size Limit Of ${MB}.`.replace(",", ", ");
			let message = filesOverLimited.length > 3 ? sentance.replace(",", " and") : sentance.replace(/,(?=[^,]*$)/, " and");

			res.status(413).json({ status: 413, message });
		}
		next();
	} catch (error) {
		res.status(404).json(error);
	}
};

export const checkExtensions = (...allowedExts) => {
	return (req, res, next) => {
		try {
			let files = req.files;
			let filesExtensions = [];

			Object.keys(files).forEach((key) => {
				let ext = extname(files[key].name);
				filesExtensions.push(ext);
			});

			let isAllowed = filesExtensions.every((ext) => allowedExts.includes(ext));

			if (!isAllowed) {
				let message = `Upload Failed; Only ${allowedExts.toString()} Files Allowed.`.replace(",", ", ");
				res.status(422).json({ status: 422, message });
			}

			next();
		} catch (error) {
			res.status(404).json(error);
		}
	};
};
