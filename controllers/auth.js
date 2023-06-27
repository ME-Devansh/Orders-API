const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User");

const register = async (req, res) => {
	const user = await User.create(req.body);
	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({
		user: { name: user.getName() },
		token,
	});
};

const login = async (req, res) => {
	const { phoneNumber, password } = req.body;
	if (!phoneNumber || !password) {
		throw new BadRequestError("Please provide phone number and password");
	}
	const user = await User.findOne({ phoneNumber });
	if (!user) {
		throw new UnauthenticatedError("Invalid Credentials");
	}
	//compare password
	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid Credentials");
	}
	const token = user.createJWT();
	res.status(StatusCodes.OK).json({ user: { name: user.getName() }, token });
};

module.exports = {
	register,
	login,
};
