const User = require("../models/user.models");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let user = await User.find().lean().exec();

    res.status(200).send({ user: user });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    let user = await User.find({ _id: req.params.id }).lean().exec();

    res.status(200).send({ user: user });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let user = User.create(req.body);
    res.status(200).send({ user: user });
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});

module.exports = router;
