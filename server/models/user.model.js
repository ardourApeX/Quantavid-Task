const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	bucketURL: {
		type: String,
		required: true,
	},
	posts: [
		{
			type: ObjectId,
			ref: "Post",
		},
	],
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
