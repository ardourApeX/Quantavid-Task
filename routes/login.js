const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const { loginMiddleware } = require("../middlewares");
const { passwordValidation } = require("../utils/passwordValidation");
const { ACCESS_TOKEN } = require("../contants");
const loginRoute = express.Router();
loginRoute.use(jsonParser);
loginRoute.post("/", loginMiddleware, async function (request, response) {
	try {
		const loginUser = request.loginUser;
		const { password: userEnteredPassword } = request.body;
		const validation = await passwordValidation(
			userEnteredPassword,
			loginUser.password
		);
		if (validation.success && validation.result) {
			const payload = {
				id: loginUser.id,
				email: loginUser.email,
				name: loginUser.name,
			};
			const accessToken = jwt.sign(payload, ACCESS_TOKEN);
			response.status(200).send({
				success: true,
				accessToken,
				message: "User successfully logged in",
			});
		} else if (validation.success && !validation.result) {
			response.status(validation.status).send({
				success: false,
				message: "Password does not match",
			});
		} else {
			response.status(501).send({ validation });
		}
	} catch (error) {
		response.status(500).send({
			success: false,
			message: error.message,
		});
	}

	response.status(200).send({ success: true, message: "Testing Done" });
});
exports.loginRoute = loginRoute;
