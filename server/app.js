const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors);
app.use(morgan("tiny"));
app.use(express.json());
app.disable("x-powered-by");

module.exports = app;
