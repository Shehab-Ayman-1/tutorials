import Products from "../models/products.model.js";
import { getCache, setCache, pushBrand, pushKind, pushName } from "./useRedis.js";
import { createClient } from "redis";

const redis = createClient();

export const GET_ALL = async (req, res) => {
	try {
		// Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		// Return The Data If It Is Stored In The Cach Memory
		let isCached = await getCache(redis);
		console.log(isCached ? "From Cashed" : "From MongoDB");
		if (isCached) return res.status(200).json(isCached);

		// Get The Data From Database, Cached And Send It To The Frontend
		let products = await Products.find();
		await setCache(redis, products);
		res.status(200).json(products);
	} catch (error) {
		res.status(404).json(error.message);
	} finally {
		redis.quit();
	}
};

export const POST_BRAND = async (req, res) => {
	try {
		// Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		let body = req.body;
		let newProduct = new Products(body);
		newProduct.save();

		// Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		await pushBrand(redis, newProduct);

		res.status(200).json(JSON.parse(await redis.get("products"))?.length);
	} catch (error) {
		res.status(404).json("error -> " + error.message);
	} finally {
		redis.quit();
	}
};

export const POST_KIND = async (req, res) => {
	try {
		// Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		const { brand, kind, img } = req.body;
		const product = await Products.findOne({ brand });

		product.kinds.push({ kind, img });
		product.save();

		await pushKind(redis, product);

		res.status(200).json(product);
	} catch (error) {
		res.status(404).json("error -> " + error.message);
	} finally {
		redis.quit();
	}
};

export const POST_NAME = async (req, res) => {
	try {
		const { brand, kind: k, ...body } = req.body;

		// Connect To Redis
		redis.on("error", (error) => console.log("Redis Error -> ", error));
		await redis.connect();

		// Get The Target Product
		const productBrand = await Products.findOne({ brand });
		if (!productBrand) return res.status(404).json({ error: "هذا القسم غير موجود" });

		// Check If The Kind Is Define
		const kind = productBrand.kinds.filter((item) => item.kind === k.trim());
		if (!kind.length) return res.status(404).json({ error: "هذا المنتج غير موجود" });

		// Check If The Kind Is Dublicated Before
		const branch = kind[0].branches.filter((branch) => branch.name === body.name);
		if (branch.length >= 1) return res.status(404).json({ error: "هذا النوع موجود بالفعل" });

		// Post The New Data
		const kindIndex = productBrand.kinds.indexOf(kind[0]);
		productBrand?.kinds[kindIndex]?.branches.push(body);

		productBrand.save();

		await pushName(redis, productBrand);
		res.status(200).json(productBrand);
	} catch (error) {
		res.status(404).json("error -> " + error.message);
	} finally {
		redis.quit();
	}
};
