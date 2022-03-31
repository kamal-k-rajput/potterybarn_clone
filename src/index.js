const express = require("express");
const userController = require("./controllers/user.controllers");
const app = express();

app.use(express.json());

module.exports = app;
app.use("/users", userController);
