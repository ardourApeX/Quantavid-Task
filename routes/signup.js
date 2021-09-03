const express = require("express");
var { users } = require("../database/user");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const { signupParamsCheck, emailValidation } = require("../middlewares");
const { encryption } = require("../utils/encryption");
const signupRoute = express.Router();
const { createFolderByName } = require("../utils/createFolderByName");
signupRoute.use(jsonParser);
signupRoute.post(
	"/",
	signupParamsCheck,
	emailValidation,
	async function (request, response) {
		const { name, email, password } = request.body;
		try {
			const encryptedPassword = await encryption(password);
			if (encryptedPassword.success) {
				users.push({
					id: users.length + 1,
					name,
					email,
					password: encryptedPassword.hash,
				});

				await createFolderByName(name);

				response
					.status(200)
					.send({ success: true, message: "successful signup" });
			} else {
				response
					.status(500)
					.send({ success: false, message: encryptedPassword.error });
			}
		} catch (error) {
			response
				.status(500)
				.send({ success: false, message: "Internal Server Error" });
		}
	}
);
exports.signupRoute = signupRoute;
