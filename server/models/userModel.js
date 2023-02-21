const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
	{
		username: String,
		email: {
			type: String,
			unique: [true, "An account is already under that email"],
		},
		password: String,
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", UserModel);

module.exports = User;
