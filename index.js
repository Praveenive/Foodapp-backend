import  express  from "express";
import dotenv from 'dotenv'
import { databaseConnection } from "./db.js";
import cors from 'cors'
import { userRouter } from "./Routes/users.js";
import {  nonvegdishRouter } from "./Routes/nonvegdishes.js";
import { vegdishRouter } from "./Routes/vegdishes.js";
import { cateringRouter } from "./Routes/catering.js";
import { isAuthenicated } from "./Controllers/auth.js";
import { feedbackRouter } from "./Routes/feedback.js";


const app =express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
databaseConnection()

app.use("/user",userRouter)
app.use("/dish",isAuthenicated,nonvegdishRouter)
app.use("/vegdish",isAuthenicated, vegdishRouter)
app.use("/catering",isAuthenicated,cateringRouter)
app.use("/feedback",isAuthenicated,feedbackRouter)

app.listen(PORT,()=>console.log(`Server running in ${PORT}`))