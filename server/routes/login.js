const bodyParser = require("body-parser");
const express = require("express");
const loginRoute = express.Router();
const jwt = require("jsonwebtoken");
const jsonParser = bodyParser.json();
loginRoute.use(jsonParser);

//ENVIRONMENT VARIABLES
const ACCESS_TOKEN = process.env["ACCESS_TOKEN"];

//MIDDLEWARE
const { loginMiddleware } = require("../middlewares");

//UTILS or HELPERS
const { passwordValidation } = require("../utils/passwordValidation");

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
				data: {
					accessToken,
					id: payload.id,
				},

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
});
exports.loginRoute = loginRoute;
