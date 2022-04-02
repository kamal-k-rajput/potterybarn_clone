const express = require("express");
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://kamalkishor:Kamak-1234@cluster0.pg1tz.mongodb.net/potterybarn-clone?retryWrites=true&w=majority"
  );
};
