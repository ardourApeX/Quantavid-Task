const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const signupRoute = express.Router();
//middlewares
const { signupParamsCheck, emailValidation } = require("../middlewares");

//Helpers or Utils Functions
const { encryption } = require("../utils/encryption");

//ACCESSING USER COLLECTION
const { User } = require("../models/user.model");

//ENVIRONMENT
const accessKey = process.env["ACCESSKEYID"];
const secretKey = process.env["SECRETACCESSKEY"];

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
				const user = {
					name,
					email,
					password: encryptedPassword.hash,
				};
				try {
					const NewUser = new User(user);
					await NewUser.save();
					response.status(201).send({
						success: true,
						message: "User has been registered to our database",
					});
				} catch (error) {
					response.status(500).send({ success: false, message: error });
				}
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
