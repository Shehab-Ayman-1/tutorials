/* status:
	- 200, 201 -> Success
	- 400, 401 -> Bad Request [Validate]
	- 404, 405 -> Error
*/
import mongoose from "mongoose";
import Product from "../models/products.model.js";

export const GET_PRODUCTS = async (req, res) => {
	/* Search
		- find                      -> Find All Products, Can To Search By Anu Key
		- findById                  -> Find Product By ID
		- findOne                   -> Find Product Any Property
		Events
		- limit(num)                -> Limit The Recieved Data
		- sort({ key: 1 || -1 })    -> Sort By The Key Name, [1, true] -> From Bigger To Smaller | [-1, false] -> From Smaller To Bigger
		- select({ keys: 1 || -1 }) -> Select What Is Recieved Data
		- count                     -> The Elements Count 
    */
	try {
		let all = await Product.find();
		let has = await Product.find({ age: 23 });
		let limited = await Product.find().limit(2);
		let sorted = await Product.find().sort({ name: 1 }); // Sort By Name From The Bigger To The Smaller
		let selected = await Product.find().select({ name: 1, isPublished: true }); // Get The Products That Contain Name, And isPublished
		let count = await Product.find().count();
		res.status(200).json({ all, has, limited, sorted, selected, count });
	} catch (reason) {
		res.json({ GET_PRODUCTS: reason.message });
	}
};

export const GET_PRODUCT = async (req, res) => {
	/* Queries:
		- [eq]  -> Equal
		- [gt]  -> Greater Than
		- [lt]  -> Leass Than
		- [gte] -> Greater Than OR Equal
		- [lte] -> Less Than OR Equal
		- [in]  -> In This Numbers
		- [nin] -> Now In This Numbers
		- [or]    -> Key1 || key2
		- [and]   -> key1 && key2
		- [^]   -> Start With /pattern/
		- [$]   -> End With /pattern/
		- [.*]  -> Any Where
    */
	try {
		let equal = await Product.find({ price: { $eq: 200 } });
		let gt = await Product.find({ price: { $gt: 200 } });
		let lt = await Product.find({ price: { $lt: 200 } });
		let gtLT = await Product.find({ price: { $gt: 200, $lt: 500 } });
		let gte = await Product.find({ price: { $gte: 200 } });
		let lte = await Product.find({ price: { $lte: 200 } });
		let gteLTE = await Product.find({ price: { $gte: 200, $lte: 500 } });
		let _in = await Product.find({ price: { $in: [100, 150, 200, 300] } });
		let nin = await Product.find({ price: { $nin: [100, 150, 200, 300] } });
		let or = await Product.find().or([{ name: "labtop" }, { isPublished: false }]);
		let and = await Product.find().and([{ name: "labtop" }, { isPublished: true }]);
		let startWith = await Product.find({ name: /^phone/i });
		let endWith = await Product.find({ name: /ear$/i });
		let between = await Product.find({ name: /.*for.*/i });

		res.status(200).json({ equal, gt, lt, gtLT, gte, lte, gteLTE, _in, nin, or, and, startWith, endWith, between });
	} catch (reason) {
		res.json({ GET_PRODUCT: reason.message });
	}
};

export const ADD_PRODUCTS = async (req, res) => {
	/* Create New Products
		- new Product() -> Create New Object From The Class Model And Recieve The Data From The User By <Req.body>
		- save() -> Use To Send The Data To The Database
		- create() -> Use To Create A New Product Without Save()
    */
	try {
		let body = req.body;
		if (!body.name) return res.status(400).json({ ADD_PRODUCTS: "Name Is Required" });

		// [1] The First Way
		// let product1 = new Product(body);
		// await product1.save();

		// [2] The Second Way
		let product2 = await Product.create(body);
		console.log(product2);

		res.status(200).json({ message: "The Products Was Created Successfully.", product2 });
	} catch (reason) {
		res.status(404).json({ ADD_PRODUCTS: reason.message });
	}
};

export const UPDATE_PRODUCTS = async (req, res) => {
	/* Update
		- findById -> Return The User By ID
		- set      -> Update By Key And Value
    */
	try {
		let { id } = req.params;
		let { name, price } = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(401).json({ UPDATE_PRODUCTS: "User ID Is Not Valid" });

		// [1] The First Way
		let findAndUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(findAndUpdate);

		// [2] The Second Way
		// let update = await Product.findOneAndUpdate({ name }, req.body, { new: true });
		// res.status(200).json(update);

		// [3] The Third Way
		// let update = await Product.updateOne({ name }, req.body, { new: true });
		// res.status(200).json(update);

		// [4] The Forth Way
		// let update = await Product.updateMany({ isPublished: true }, req.body, { new: true });
		// res.status(200).json(update);

		// [5] The Fifth Way
		// let setProp = await Product.findById(id);
		// setProp.set({ name, price });
		// let saved = await setProp.save();
		// res.status(200).json(saved);

		// [6] The Sixth Way
		// let findById = await Product.findById(id);
		// findById.name = name;
		// findById.price = price;
		// let saved = await findById.save();
		// res.status(200).json(saved);
	} catch (reason) {
		res.json({ UPDATE_PRODUCTS: reason.message });
	}
};

export const DELETE_PRODUCTS = async (req, res) => {
	try {
		let { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(401).json({ DELETE_PRODUCTS: "This ID Is Not Defined" });

		// [1] The First Way
		await Product.findByIdAndDelete(id);
		res.status(200).json({ DELETE_PRODUCTS: "The Product Was Deleted" });

		// [2] The Second Way
		// await Product.findOneAndDelete(req.body.name);
		// res.status(200).json({ DELETE_PRODUCTS: "The Product Was Deleted" });

		// [3] The Third Way
		// await Product.deleteOne({ name: req.body.name });
		// res.status(200).json({ DELETE_PRODUCTS: "The Product Was Deleted" });

		// [4] The Forth Way
		// await Product.deleteMany({ name: req.body.name });
		// res.status(200).json({ DELETE_PRODUCTS: "The Product Was Deleted" });
	} catch (reason) {
		res.json({ DELETE_PRODUCTS: reason.message });
	}
};
