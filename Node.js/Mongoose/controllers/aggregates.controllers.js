import Products from "../models/products.model.js";

export const SUM_PRICES = async (req, res) => {
	try {
		const sumPrices = await Products.aggregate([
			{
				$group: {
					_id: "$catagory",
					prices: { $sum: "$price" },
				},
			},
			{
				$project: {
					_id: 0,
					catagory: "$_id",
					totalPrices: 1,
				},
			},
		]);

		res.status(200).json(sumPrices);
	} catch (error) {
		res.status(404).json(`SUM_PRICES: ${error.message}`);
	}
};

export const TOTAL_PRICES = async (req, res) => {
	try {
		const totalPrices = await Products.aggregate([
			{
				$unwind: "$count",
			},
			{
				$group: {
					_id: "$catagory",
					total: { $sum: { $multiply: ["$price", "$count.count"] } },
				},
			},
		]);

		res.status(200).json(totalPrices);
	} catch (error) {
		res.status(404).json(`TOTAL_PRICES: ${error.message}`);
	}
};

export const COMPINING = async (req, res) => {
	try {
		const compining = await Products.aggregate([
			{
				$unwind: "$count",
			},
			{
				$group: {
					_id: "$catagory",
					companies: {
						$push: {
							name: "$name",
							count: "$count.count",
							price: "$price",
							total: { $sum: { $multiply: ["$price", "$count.count"] } },
						},
					},
				},
			},
			{
				$project: {
					_id: 0,
					catagory: "$_id",
					companies: 1,
				},
			},
		]);

		res.status(200).json(compining);
	} catch (error) {
		res.status(404).json(`COMPINING: ${error.message}`);
	}
};

export const ANALYTICS = async (req, res) => {
	try {
		const analytics = await Products.aggregate([
			{
				$unwind: "$count",
			},
			{
				$project: {
					month: { $month: "$count.date" },
					day: { $dayOfMonth: "$count.date" },
					buyCount: "$count.buyCount",
					saleCount: "$count.saleCount",
				},
			},
			{
				$group: {
					_id: { month: "$month", day: "$day" },
					totalBuyCount: { $sum: "$buyCount" },
					totalSaleCount: { $sum: "$saleCount" },
				},
			},
			{
				$project: {
					_id: 0,
					dates: "$_id",
					totalBuyCount: 1,
					totalSaleCount: 1,
				},
			},
		]);

		res.status(200).json(analytics);
	} catch (error) {
		res.status(404).json(`GROUP: ${error.message}`);
	}
};
