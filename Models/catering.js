import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema

const cateringschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Contactno:{
        type:Number,
        required:true,
        minimum:10
    },
    Date:{
        type:String,
        required:true
    },
    Timing:{
        type:String,
        required:true
    },
    function_name:{
        type:String,
        required :true
    },
    memberstoattend:{
        type:Number,
        required:true
    },
    Orderstatus:{
        type:String,
        required:true
    }, user:{
        type : ObjectId,
        ref : "user"
    }
})

const Catering = mongoose.model("catering",cateringschema)
export {Catering}