require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");
const ordersRouter = require("./routes/orders");
const auth = require("./middleware/authentication");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Orders API");
});
// app.use("");
// url/add-user (POST request)
// We will store the name, phone number, and a new password (hased password)
// For Login user: url/login-user (POST request)
// phone number, password, login_by
// - Login_by will be a parameter which will be used to define between Google &
// normal Login
// For adding new order: url/add-order (POST request)
// We will need the user_id, sub_total, phone_number to add any order
// Get order detail: url/get-order (GET request)

app.use("/auth", authRouter);
app.use("/order", auth, ordersRouter);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
