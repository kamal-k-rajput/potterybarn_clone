const mongoose= require("mongoose");
const bcrypt=require("bcrypt")

const userschema=mongoose.Schema({
    email :{type:String,require:true ,unique:true},
    password:{type:String,require:true}
},
{
   timeStamps :true,
   versionKey :false,
})

userschema.pre("save",function(next) {
   const hash=bcrypt.hashSync(this.password,8);
   this.password=hash;
    return next();

})

userschema.methods.checkPassword= function (password){
    return bcrypt.compareSync(password,this.password);
}


const user= mongoose.module("user",userschema);

module.exports=user;