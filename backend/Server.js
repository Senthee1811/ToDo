import express from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import router from "./routes/todoRoute.js";

dotenv.config();

const app = express(); 
const port = process.env.PORT || 8081;


app.use(express.json()); 
app.use("/api/todoapp",router);



app.listen(port,() => {
    console.log("Server started on ",port);
}) 

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
})