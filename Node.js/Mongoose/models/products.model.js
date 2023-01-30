import mongoose from "mongoose";

let schema = new mongoose.Schema({
	/* 
	Schema -> Is The Pattert That The Database Object Will Create Like That
	- type -> Detect Key Type
	- required -> Make The Property Is Required
	- unique -> Make The property Is Unique
	- default -> Put A Default Value To The Attribute
	- minLength -> Set A Min Length To The Property
	- maxLength -> Set A Max Length To The Property
	- min -> Min Value Of The Price 
	- max -> Max Value Of The Price
	- emum -> Make The User To Choose Between Some Values
	- validate{validator, message} -> Create A Custome Validation
	- trim -> Trim The Whitespaces From The Left And Right
	- lowercase- Convert To Lowercase
	- uppercase -> Convert To Uppercase
	- get -> Make Something While Get From Database
	- set -> Make Something While Send To Database
	*/

	isPublished: Boolean,
	name: { type: String, required: true, unique: true, minlength: 3, maxlength: 255, uppercase: true, trim: true },
	countries: { type: Object },
	date: { type: Date, default: Date.now() },
	catagory: { type: String, lowercase: true, enum: ["gaming", "programming", "workstation"] },
	price: {
		type: Number,
		min: 100,
		max: 10000,
		get: (val) => Math.round(val),
		set: (val) => Math.round(val),
		required: function () {
			return this.isPublished || false; // isPublished === true ? true : false
		},
	},
	tags: {
		type: Array,
		required: true,
		validate: {
			validator: function (arr) {
				return arr && arr.length < 4;
			},
			message: "[tags Must Be From 1 To 3]",
		},
	},
});

export default mongoose.model("products", schema);
