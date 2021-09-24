const { findUserInDb } = require("../utilities");
async function loginMiddleware(request, response, next) {
	let { email, password } = request.body;

	if (!!email && !!password) {
		try {
			const userInfo = await findUserInDb(email);
			if (!userInfo) {
				response
					.status(404)
					.send({ success: false, message: "User does not exist" });
			}
			request.loginUser = userInfo;
			next();
		} catch (error) {
			console.log(error);
			response.status(500).send({ success: false, message: error });
		}
	} else {
		response
			.status(400)
			.send({ success: false, message: "Missing Parameters" });
	}
}
exports.loginMiddleware = loginMiddleware;
