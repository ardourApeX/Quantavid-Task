const { User } = require("../models/user.model");
async function findUserInDb(condition) {
	try {
		const response = await User.findOne({ email: condition });
		return response;
	} catch (error) {
		return null;
	}
}
exports.findUserInDb = findUserInDb;
