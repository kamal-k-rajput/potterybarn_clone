

const { generateKey } = require("crypto");
var jwt=require("jsonwebtoken");

const user = require("../models/user.model");
const user=require("../models/user.model")

const newToken=(user)=>{
    return jwt.sign({user},'potterySecret')
}

const register=async (req,res) =>{
   try{
       const User=await user.findOne({email :req.body.email})
        if(User){
        return    res.status(400).send({message :"Email already exist"})
        }
       User=await User.create(req,body);

       const Token=token(User)
       return res.status(200).send(User);
    }
    catch(err){
    res.status(400).send({message :err.message});
   }

}
const login=(req,res) =>{
    try{
        const user=await User.findOne({email : req.body.email})
        
        if(!User){
        return res.status(400).send("wrong email Or password");
        }
        
        const match=User.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send("wrong password")
        }
        
        const Token=generatetoken(User)
        return res.status(200).send({user,token})
    }
    catch(err){
     res.status(400).send({message :err.message});
    }
   
 }

module.exprots={register,login}