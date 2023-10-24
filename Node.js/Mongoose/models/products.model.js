import { model, Schema, SchemaTypes } from "mongoose";

const schema = new Schema(
	{
		countries: Object,

		suggestedProducts: [SchemaTypes.ObjectId],

		name: {
			type: String,
			required: [true, "Name Is A Required Field."],
			unique: true,
			minlength: [3, "Product Name Must Be Atleast 3 Characters"],
			maxlength: 255,
			uppercase: true,
			trim: true,
		},

		catagory: {
			type: String,
			lowercase: true,
			enum: ["gaming", "programming", "workstation"],
		},

		date: {
			type: Date,
			default: Date.now(),
		},

		isPublished: {
			type: Boolean,
			default: false,
		},

		count: [
			{
				date: { type: Date, default: new Date() },
				count: { type: Number, min: 1, max: 100, default: 0 },
				buyCount: { type: Number, default: 0 },
				saleCount: { type: Number, default: 0 },
			},
		],

		price: {
			type: Number,
			min: 100,
			max: 1000,
			get: (val) => Math.round(val),
			set: (val) => Math.round(val),
			required: function () {
				return this.isPublished;
			},
		},

		tags: {
			type: Array,
			required: true,
			validate: {
				validator: function (arr) {
					return arr && arr.length < 4;
				},
				message: "[tags Must Be From 1, 2, OR 3 Tags]",
			},
		},
	},
	{
		timestamps: true,
	}
);

// Statics
schema.statics.findByName = async function (name) {
	if (typeof name === "string") return await this.find({ name: new RegExp(name.toUpperCase(), "i") });

	return await this.find();
};

// Query
schema.query.findTotalPrices = async function () {
	const products = await this;

	const isAllExists = products.every(({ count, price }) => typeof (count + price) === "number");
	if (!isAllExists) return { status: 400, error: `Products Has Invalid Props` };

	const total = products.reduce((prev, cur) => prev + cur.count * cur.price, 0);

	return total;
};

// Methods
schema.methods.findTotalPrice = function () {
	const count = this.count;
	const price = this.price;

	if (!count) return { status: 400, error: "No Count Found." };
	if (!price) return { status: 400, error: "No Price Found." };

	return count * price;
};

// Virtual
schema.virtual("totalPrice").get(function () {
	return this.price * this.count;
});

export default model("products", schema);
