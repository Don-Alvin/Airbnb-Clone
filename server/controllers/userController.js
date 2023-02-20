const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// check if user already exists
		const userExists = User.findOne({ email });

		if (userExists) {
			res.status(404);
		}

		// create new user
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			email,
			username,
			password: hashedPassword,
		});

		if (newUser) {
			res.status(201).json({ username, email, password });
		}
	} catch (error) {
		res.status(500).send({ error });
	}
};

module.exports = { registerUser };
