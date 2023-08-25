import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
        unique:true
    },
    dishname:{
        type:String,
        required :true
    },
    price:{
        type:Number,
        requierd:true
    }
})

const Nonvegdish = mongoose.model("nonvegdishes",dishSchema)
export {Nonvegdish}