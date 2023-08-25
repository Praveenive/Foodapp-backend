import  express  from "express";
import { generateJwtToken, User } from "../Models/users.js";
import bcrypt from "bcrypt"

const router =express.Router();

router.post("/signup",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})
        console.log(user)
        if(user){
            return res.status(400).json({message:"Email already Exists"})
        }
        const salt =await bcrypt.genSalt(10)
        const hashedpassword =await bcrypt.hash(req.body.password, salt);
        
        user =await new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashedpassword,
            type_of_user:"user"
        }).save()
        const token = generateJwtToken(user._id)
        res.status(202).json({message:"Signup Done",token})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.post("/login",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(400).json({message:"User Not Found"})
        }
        let validatePassword = await bcrypt.compare(req.body.password,user.password)
        if(!validatePassword){
            return res.status(404).json({message:"Password Mismatch"})
        }
        const token = generateJwtToken(user._id)
        res.status(202).json({message:"Logged in success",role:user.type_of_user, token,id:user._id})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

export const userRouter =router;