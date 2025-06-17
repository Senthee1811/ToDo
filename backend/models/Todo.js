import mongoose from "mongoose"; 

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
}) 

export const Todo = mongoose.model("Todo",TodoSchema) || mongoose.models.Todo;