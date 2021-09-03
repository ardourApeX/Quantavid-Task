const { findUserInDb } = require("../utils/findUserInDb");
function loginMiddleware(request, response, next) {
	let { email, password } = request.body;
	if (!!email && !!password) {
		const userInfo = findUserInDb(email);
		if (!userInfo) {
			response
				.status(404)
				.send({ success: false, message: "User does not exist" });
		} else {
			request.loginUser = userInfo;
			next();
		}
	} else {
		response
			.status(400)
			.send({ success: false, message: "Missing Parameters" });
	}
}
exports.loginMiddleware = loginMiddleware;
