const dotenev = require("dotenv").config({ path: "./.env" });
const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

const startServer = async () => {
	try {
		server.listen(PORT, () => {
			console.log(`Server running on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
