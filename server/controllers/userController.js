//Register user

const registerUser = async (req, res) => {
	const { username, email, password } = req.body;
	res.json({ username, email, password });
};

module.exports = { registerUser };
