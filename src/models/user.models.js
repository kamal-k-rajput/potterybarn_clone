const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin", "seller"],
    },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("user", userSchema);

