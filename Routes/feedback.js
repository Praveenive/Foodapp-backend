import express  from "express";
import { Feedback } from "../Models/feedback.js";



const router = express.Router()
router.use(express.json())

router.post("/addfeedback",async(req,res)=>{
    try {
        const newfeedback = await new Feedback({
            Name:req.body.Name,
            Contact:req.body.Contact,
            Feedback:req.body.Feedback
        }).save()
        if(!newfeedback){
            return res.status(404).json({message:"Error While adding Feedback"})
        }
        res.status(202).json({message:"Feedback Added Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.get("/allfeedback",async(req,res)=>{
    try {
        const alldishes = await Feedback.find()
        if(!alldishes){
            return res.status(400).json({message:"Feedback Not Found"})
        }
        res.status(200).json({message:"All Feedbacks",data:alldishes})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})




export const feedbackRouter = router;