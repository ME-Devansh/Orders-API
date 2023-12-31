const express = require("express");
const { getOrders, addOrder } = require("../controllers/orders");
const router = express.Router();

router.route("/add-order").post(addOrder);
router.route("/get-order/").get(getOrders);

module.exports = router;
