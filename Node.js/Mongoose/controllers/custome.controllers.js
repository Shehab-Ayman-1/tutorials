import Products from "../models/products.model.js";

export const CUSTOME_METHODS = async (req, res) => {
	try {
		const product = await Products.findOne({ name: "KEYBOARD" });

		// Statics
		const statics = await Products.findByName("SCREEN");

		// Query
		const query = await Products.find().findTotalPrices();

		// Methods
		const methods = product.findTotalPrice();

		// Virtual
		const virtual = product.totalPrice;

		res.status(200).json({ query, methods, virtual, statics });
	} catch (error) {
		res.status(404).json(`CUSTOME_METHODS: ${error.message}`);
	}
};
