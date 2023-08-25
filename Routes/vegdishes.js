import express  from "express";
import { Vegdish} from "../Models/vegdishes.js";


const router = express.Router()
router.use(express.json())

router.post("/add-dish",async(req,res)=>{
    try {
        const newDish = await new Vegdish({
            image:req.body.image,
            dishname:req.body.dishname,
            price:req.body.price
        }).save()
        if(!newDish){
            return res.status(404).json({message:"Error While adding Dish"})
        }
        res.status(202).json({message:"New Dish Added Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.get("/alldishes",async(req,res)=>{
    try {
        const alldishes = await Vegdish.find()
        if(!alldishes){
            return res.status(400).json({message:"Dishes Not Found"})
        }
        res.status(200).json({message:"All the items",data:alldishes})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server issues"})
    }
})

router.put("/updatedish/:id",async(req,res)=>{
    try {
        const updatedish = await Vegdish.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
        )
        if(!updatedish){
            return res.status(400).json({message:"Error Occurs"})
        }
        res.status(202).json({data:updatedish,message:"Data Successfully Updated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        const delDish = await Vegdish.findByIdAndDelete({_id:req.params.id})
        if(!delDish){
            return res.status(404).json({message:"Not able to Delete,Dish Not found"})
        }
        res.status(202).json({message:"Dish Successfully Deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error"})
    }
})
export const vegdishRouter = router;