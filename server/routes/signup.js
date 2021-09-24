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
const s3 = new AWS.S3({
	accessKeyId: accessKey,
	secretAccessKey: secretKey,
});

signupRoute.use(jsonParser);

signupRoute.post(
	"/",
	signupParamsCheck,
	emailValidation,
	async function (request, response) {
		const { name, email, password } = request.body;

		try {
			// ENCRYPT PASSWORD -> CREATE BUCKET -> SAVE IT TO DB
			const encryptedPassword = await encryption(password);
			if (encryptedPassword.success) {
				//If password encryption was successful
				s3.putObject(
					{
						Key: `${name}/`,
						Bucket: `quantavid`,
					},
					function (err, data) {
						if (err) {
							console.log(err);
						} else {
							console.log("Folder Created", data);
						}
					}
				);

				//PAYLOAD for user
				const user = {
					name,
					email,
					password: encryptedPassword.hash,
					bucketURL: `quantavid/${name}`,
				};

				try {
					//ADDING USER TO DB
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
				//If password encryption fails
				response
					.status(500)
					.send({ success: false, message: encryptedPassword.error });
			}
		} catch (error) {
			//If any thing happens while calling any async function
			response
				.status(500)
				.send({ success: false, message: "Internal Server Error" });
		}
	}
);
exports.signupRoute = signupRoute;
