const express = require("express");
const userController = require("./controllers/user.controllers");
const productController = require("./controllers/product.controllers");
const app = express();
const { register, login } = require("./controllers/auth.controller");


app.use(express.json());

app.use("/users", userController);
app.use("/products", productController);

app.post("/register", register);

app.post("/login", login);
module.exports = app;