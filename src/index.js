const express = require("express");
const userController = require("./controllers/user.controllers");
const productController = require("./controllers/product.controllers");
const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/products", productController);

module.exports = app;