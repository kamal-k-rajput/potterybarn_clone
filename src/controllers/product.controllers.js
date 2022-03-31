const Product = require("../models/product.model");
const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  try {
    const product = Product.find({category: req.params.category}).lean().exec();
    res.status(200).send({ product: product });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});
router.post("/", function (req, res) {
  try {
    const product = Product.create(req.body);
    res.status(200).send({ product: product });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});
module.exports = router;
