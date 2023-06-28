const mongoose = require("mongoose");

//user_id, subtotal, phone_number

const OrderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	subTotal: {
		type: Number,
		required: [true, "Please provide sub total"],
	},
	phoneNumber: {
		type: Number,
		unique: true,
		match: [
			/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			"Please provide valid phone number.",
		],
	},
});

module.exports = mongoose.model("Order", OrderSchema);
