const { loginMiddleware } = require("./loginMiddleware");
const { emailValidation, signupParamsCheck } = require("./signupMiddleware");
const { checkAuthToken } = require("./checkAuthToken");
module.exports = {
	loginMiddleware,
	emailValidation,
	signupParamsCheck,
	checkAuthToken,
};
