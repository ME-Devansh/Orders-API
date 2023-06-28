const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();

router.post("/register-user", register);
router.post("/login-user", login);

module.exports = router;
