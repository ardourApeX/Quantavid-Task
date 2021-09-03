const { users } = require("../database/user");
function findUserInDb(email) {
	return users.find((user) => user.email === email);
}
exports.findUserInDb = findUserInDb;
