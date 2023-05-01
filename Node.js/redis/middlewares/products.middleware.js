import { createClient } from "redis";
import { getCached } from "../controllers/caching.js";

// Create New Redis Client
const redis = createClient();

export const IS_DATA_CACHED = async (req, res, next) => {
	try {
		// [1] Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		// [2] Return The Data If It Is Stored In The Cach Memory
		let isCached = await getCached("products");
		if (isCached) return res.status(200).json(isCached);

		// [3] Get The Data From The Database & Send To The Controller
		next();
	} catch (error) {
		console.log(error);
		res.status(404).json(error.message);
	} finally {
		redis.quit();
	}
};
