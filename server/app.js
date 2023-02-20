const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const { UserRouter } = require("./routes/userRoutes");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
	})
);
app.use(morgan("tiny"));
app.use(express.json());
app.disable("x-powered-by");

app.use("/", UserRouter);

module.exports = app;
