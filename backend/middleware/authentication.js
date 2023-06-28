const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
	//check header
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new UnauthenticatedError("Authentiaction invalid");
	}
	const token = authHeader.split(" ")[1];
	try {
		const payload = jwt.verify(token, "jwtsecret");
		req.user = {
			userId: payload.userId,
			name: payload.name,
			phoneNumber: payload.phoneNumber,
		};
		next();
	} catch (error) {
		throw new UnauthenticatedError("Authentication Failed");
	}
};

module.exports = auth;
