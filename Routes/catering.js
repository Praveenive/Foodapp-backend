import express  from "express";
import { Catering } from "../Models/catering.js";



const router = express.Router()
router.use(express.json())

router.post("/createorder",async(req,res)=>{
    try {
        const newDish = await new Catering({
          Name:req.body.Name,
          Contactno:req.body.Contactno,
          Date:req.body.Date,
          Timing:req.body.Timing,
          function_name:req.body.function_name,
          memberstoattend:req.body.memberstoattend,
          user:req.user._id,
          Orderstatus:"Pending"
        }).save()
        if(!newDish){
            return res.status(404).json({message:"Error While ordering "})
        }
        res.status(202).json({message:"Order Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.get("/cateringorders",async(req,res)=>{
    try {
        const alldishes = await Catering.find()
        if(!alldishes){
            return res.status(400).json({message:"Orders not Found"})
        }
        res.status(200).json({message:"All the items",data:alldishes})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})

router.get("/myorders",async(req,res)=>{
    try {
        const myorder = await Catering.find({user:req.user._id})
        console.log(myorder)
        if(!myorder)
        {
            return res.status(404).json({message:"Orders not found"})
        }
        res.status(202).json({data:myorder,message:"Your orders"})
    } catch (error) {
        console.log(error)
        res.status(505).json({message:"Server error"})
    }
})

router.put("/orderstatus/:id",async(req,res)=>{
    try {
        const updatedish = await Catering.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
        )
        if(!updatedish){
            return res.status(400).json({message:"Error Occurs"})
        }
        res.status(202).json({data:updatedish,message:"Order status successfully Updated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})


export const cateringRouter = router;