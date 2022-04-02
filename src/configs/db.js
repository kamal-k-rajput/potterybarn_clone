const express=require("express");
const mongoose=require("mongoose");

module.exprots=() =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/potterybarn");
}