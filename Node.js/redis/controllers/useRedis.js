export const getCache = async (redis) => {
	try {
		let cachedData = await redis.GET("products");
		return cachedData ? JSON.parse(cachedData) : null;
	} catch (error) {
		console.log("Get Cache -> ", error);
	}
};

export const setCache = async (redis, data) => {
	try {
		await redis.SET("products", JSON.stringify(data));
	} catch (error) {
		console.log("Set Cache -> ", error);
	}
};

export const pushBrand = async (redis, value) => {
	try {
		let products = await redis.GET("products");
		let newOne = [...JSON.parse(products), value];

		await redis.SET("products", JSON.stringify(newOne));
	} catch (error) {
		console.log("Push Brand -> ", error);
	}
};

export const pushKind = async (redis, product) => {
	try {
		let products = JSON.parse(await redis.GET("products"));
		let target = products.findIndex((item) => item.brand === product.brand);
		products.splice(target, 1, product);
		await redis.SET("products", JSON.stringify(products));
	} catch (error) {
		console.log("Push Kind -> ", error);
	}
};

export const pushName = async (redis, product) => {
	try {
		let products = JSON.parse(await redis.GET("products"));
		let target = products.findIndex((item) => item.brand === product.brand);
		products.splice(target, 1, product);
		await redis.SET("products", JSON.stringify(products));
	} catch (error) {
		console.log("Push Name -> ", error);
	}
};
