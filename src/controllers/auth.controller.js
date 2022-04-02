// const { generateKey } = require("crypto");
var jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const generatetoken = (user) => {
  return jwt.sign({ user }, "potterySecret");
};
const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "Email already exist" });
    }
    user = await User.create(req, body);

    const Token = token(user);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send(err.message);
    }
    const match = User.checkPassword(req.body.password);
    if (!match) {
      return res.status(400).send("wrong password");
    }
    const Token = generatetoken(user);
    return res.status(200).send({ user, Token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
module.exports = { register, login };
