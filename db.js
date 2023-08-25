import mongoose from "mongoose";

// moongoose is an Object Data Modeling library for mongodb,helps intract with mongodb database

export function databaseConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
 try {
    mongoose.connect("mongodb://127.0.0.1:27017/",params)
    console.log("Database connected")
 } catch (error) {
    console.log("database",error)
 }   
}