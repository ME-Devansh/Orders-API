const Order = require("../models/Order");
const { StatusCodes } = require("http-status-codes");

const getOrders = async (req, res) => {
	const orders = await Order.find({ userId: req.user.userId });
	res.status(StatusCodes.OK).json({ orders, count: jobs.length });
};

const addOrder = async (req, res) => {
	req.body.userId = req.user.userId;
	req.body.phoneNumber = req.user.phoneNumber;
	const order = await Order.create(req.body);
	res.status(StatusCodes.CREATED).json({ order });
};

module.exports = {
	getOrders,
	addOrder,
};
