import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";

const userSchema =new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    type_of_user:{
        type:String,
        required:true,
        enum:["admin","user"]
    }
})

const generateJwtToken = (id)=>{
    return jwt.sign({id},process.env.SECERT_KEY)
}

const User = mongoose.model("user",userSchema)
export {User,generateJwtToken}