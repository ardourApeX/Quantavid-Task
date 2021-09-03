const { findUserInDb } = require("../utils/findUserInDb");
function signupParamsCheck(request, response, next) {
	// This middleware is to check if the request contains all the required paramters for signup or not
	const { email, password, name } = request.body;

	if (!email || !password || !name) {
		response
			.status(400)
			.send({ success: false, message: "Missing Parameters" });
	}
	next();
}

function emailValidation(request, response, next) {
	// This middleware is to check whether the user is already there in the database or not
	const { email } = request.body;
	const userInfo = findUserInDb(email);
	if (!!userInfo) {
		response.status(408).send({
			success: false,
			message: "User already exist",
		});
	} else {
		next();
	}
}

exports.signupParamsCheck = signupParamsCheck;
exports.emailValidation = emailValidation;
