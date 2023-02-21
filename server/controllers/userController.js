const User = require("../models/userModel");
const dotenv = require("dotenv").config({ path: "./.env" });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
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

// Login User
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const jwTSecret = process.env.JWT_SECRET;

	try {
		// check user exist
		const user = await User.findOne({ email });
		if (user) {
			const passOk = bcrypt.compare(password, user.password);

			if (passOk) {
				jwt.sign(
					{ email: user.email, userId: user._id },
					jwTSecret,
					{ expiresIn: "24h" },
					(err, token) => {
						if (err) throw err;
						res.cookie("token", token).json("pass ok");
					}
				);
			} else {
				res.staus(422).json("pass not ok");
			}
		} else {
			res.json("not found");
		}
	} catch (error) {
		res.status(401).send({ error });
	}
};

module.exports = { registerUser, loginUser };
