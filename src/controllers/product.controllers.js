const express = require("express");

const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const Product = require("../models/product.model");

router.post("", authenticate, async (req, res) => {
  req.body.user_id = req.user._id;
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch(
  "/:id",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(product);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

router.get("", async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;

// const Product = require("../models/product.model");
// const express = require("express");
// const { body, validationResult } = require("express-validator");

// const router = express.Router();

// router.get("/", async function (req, res) {
//   try {
//     const product = await Product.find().lean().exec();
//     res.status(200).send({ product: product });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });
// router.post(
//   "/",
//   body("title")
//     .not()
//     .isEmpty()
//     .withMessage("title must not be empty")
//     .isLength({ min: 3 })
//     .withMessage("Title must be a valid name"),
//   body("price")
//     .not()
//     .isEmpty()
//     .withMessage("Price must be required")
//     .isNumeric()
//     .withMessage("Price must be a number"),
//   body("imageURL")
//     .not()
//     .isEmpty()
//     .withMessage("Image URL must not be empty")
//     .isLength({ min: 6 })
//     .withMessage("Image URL must be a valid URL"),
//   body("tags")
//     .custom((value) => {
//       if (value) {
//         if (value.length >= 3) return true;
//       }
//     })
//     .withMessage("if tag provided must be a valid tag name"),
//   body("category").not().isEmpty().withMessage("Must be a valid category name"),
//   function (req, res) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
//       const product = Product.create(req.body, { new: true });
//       res.status(200).send({ product: product });
//     } catch (err) {
//       res.status(404).send({ err: err.message });
//     }
//   }
// );
// module.exports = router;
