const express = require("express");
const {} = require("../controllers/jobs");
const router = express.Router();

router.route("/add-order").post(addOrder);
router.route("/get-order/:id").get(getOrders);

module.exports = router;
