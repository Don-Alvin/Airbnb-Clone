const dotenev = require("dotenv").config({ path: "./.env" });
const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = 8080;

const server = http.createServer(app);

const source = process.env.MONGO_URI;
mongoose.set("strictQuery", false);

const startServer = async () => {
	try {
		await mongoose.connect(source);
		server.listen(PORT, () => {
			console.log(`Server running on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
