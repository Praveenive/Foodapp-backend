import mongoose from "mongoose";

// moongoose is an Object Data Modeling library for mongodb,helps intract with mongodb database

export function databaseConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
 try {
    mongoose.connect("mongodb+srv://praveenive:Praveen6@cluster0.4iggedc.mongodb.net/?retryWrites=true&w=majority",params)
    console.log("Database connected")
 } catch (error) {
    console.log("database",error)
 }   
}