import mongoose from "mongoose";

const vegdishSchema = new mongoose.Schema({
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

const Vegdish = mongoose.model("vegdishes",vegdishSchema)
export {Vegdish}