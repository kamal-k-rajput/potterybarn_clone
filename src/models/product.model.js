const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  tags: { type: String, required: false },
  category: {
    type: String,
    required: true,
    enums: ["sofa", "outdoor", "chairs", "tables"],
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
