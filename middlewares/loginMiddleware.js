const { findUserInDb } = require("../utils/findUserInDb");
function loginMiddleware(request, response, next) {
	let { email, password } = request.body;
	console.log(email);
	console.log(password);
	if (!!email && !!password) {
		const userInfo = findUserInDb(email);
		console.log(userInfo);
		if (!userInfo) {
			response
				.status(404)
				.send({ success: false, message: "User does not exist" });
		}
		request.loginUser = userInfo;
		next();
	} else {
		response
			.status(400)
			.send({ success: false, message: "Missing Parameters" });
	}
}
exports.loginMiddleware = loginMiddleware;
