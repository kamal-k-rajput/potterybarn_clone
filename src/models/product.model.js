const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    tags: { type: String, required: false },
    category: {
      type: String,
      required: false,
      enums: ["sofa", "outdoor", "chairs", "tables"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
