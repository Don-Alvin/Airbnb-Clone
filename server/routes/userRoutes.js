const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const UserRouter = Router();

// Register new user

UserRouter.route("/register").post(registerUser);
UserRouter.route("/login").post(loginUser);

module.exports = { UserRouter };
