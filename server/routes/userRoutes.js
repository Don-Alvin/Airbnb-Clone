const { Router } = require("express");
const { registerUser } = require("../controllers/userController");

const UserRouter = Router();

// Register new user

UserRouter.route("/register").post(registerUser);

module.exports = { UserRouter };
