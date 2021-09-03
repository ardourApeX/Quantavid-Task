const { users } = require("../database/user");
function findUserInDb(email) {
	const res = users.find((user) => user.email === email);
	console.log("find user in db response ", res);
	return res;
}
exports.findUserInDb = findUserInDb;
