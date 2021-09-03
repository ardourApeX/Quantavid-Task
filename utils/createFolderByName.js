const fs = require("fs");
async function createFolderByName(name) {
	fs.mkdir(`../storage/${name}`, { recursive: true }, function (err) {
		console.log("ERROR", err);
		if (err) {
			return { success: true };
		} else {
			return { success: false, message: err };
		}
	});
}

exports.createFolderByName = createFolderByName;
