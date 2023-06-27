const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide name"],
		minLength: 3,
		maxLength: 50,
	},
	phoneNumber: {
		type: Number,
		unique: true,
		match: [
			/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			"Please provide valid phone number.",
		],
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minLength: 6,
	},
});

//instance methods mongoose
UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.getName = function () {
	return this.name;
};

UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id, name: this.name }, "jwtsecret", {
		expiresIn: "30d",
	});
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
