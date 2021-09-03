const bcrypt = require("bcrypt");
async function encryption(password, saltRounds = 10) {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const encryptedData = await bcrypt.hash(password, salt);
		console.log("##########", encryptedData);
		return { success: true, hash: encryptedData };
	} catch (error) {
		return { success: false, error };
	}
}
exports.encryption = encryption;
