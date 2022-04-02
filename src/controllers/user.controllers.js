// const User = require("../models/user.models");
// const express = require("express");
// // const { body, validationResult } = require("express-validator");
// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     let user = await User.find().lean().exec();
//     res.status(200).send({ user: user });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });
// router.get("/:id", async (req, res) => {
//   try {
//     let user = await User.findById(req.params.id).lean().exec();
//     res.status(200).send({ user: user });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });
// router.patch("/:id", async (req, res) => {
//   try {
//     let user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();

//     res.status(200).send({ user: user });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });
// router.delete("/:id", async (req, res) => {
//   try {
//     let user = await User.findByIdAndDelete(req.params.id).lean().exec();

//     res.status(200).send({ user: user });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     let user = User.create(req.body, { new: true });
//     res.status(200).send({ user: user });
//   } catch (err) {
//     res.status(404).send({ err: err.message });
//   }
// });

// module.exports = router;
const express = require("express");

const router = express.Router();

module.exports = router;