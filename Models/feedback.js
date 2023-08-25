import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Contact :{
        type:Number,
        required:true
    },
    Feedback:{
        type:String,
        required:true
    }
})

const Feedback = mongoose.model("feedback",feedbackSchema)
export {Feedback}