const Product = require("../models/product.model");
const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const product = await Product.find().lean().exec();
    res.status(200).send({ product: product });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});
router.post(
  "/",
  body("title")
    .not()
    .isEmpty()
    .withMessage("title must not be empty")
    .isLength({ min: 3 })
    .withMessage("Title must be a valid name"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("Price must be required")
    .isNumeric()
    .withMessage("Price must be a number"),
  body("imageURL")
    .not()
    .isEmpty()
    .withMessage("Image URL must not be empty")
    .isLength({ min: 6 })
    .withMessage("Image URL must be a valid URL"),
  body("tags")
    .custom((value) => {
      if (value) {
        if (value.length >= 3) return true;
      }
    })
    .withMessage("if tag provided must be a valid tag name"),
  body("category").not().isEmpty().withMessage("Must be a valid category name"),
  function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const product = Product.create(req.body);
      res.status(200).send({ product: product });
    } catch (err) {
      res.status(404).send({ err: err.message });
    }
  }
);
module.exports = router;
