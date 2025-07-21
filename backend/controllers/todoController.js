import {Todo} from "../models/Todo.js"; 


export const CreateTodo = async(req,res) => {
    try {
       const {title,description} = req.body; 
       const todo = await Todo.create({
        title,
        description
       }) 

        if(!todo){
            return res.status(400).json({success:false,message:"Cannot Create a Todo"})
        }
        return res.status(200).json({success:true,data:todo,message:"Todo Created Successfully"})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
        
    }

} 

export const getAllTodos = async(req,res) => {
    try {
        const todos = await Todo.find(); 
        if(!todos){
            return res.status(500).json({message:"Cannot Fetched Todos"});
        }
            return res.json({success:true,data:todos,message:"Todos Fetched Successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,message:"Internal Server Error"}); 
        
    }
} 

export const getTodo = async(req,res) => {
    const {id} = req.params;
    try {
        const todo = await Todo.findById(id); 

        if(!todo){
            console.log(todo); 
            return res.json({success:true,data:todo,message:"Todo Fetched Successfully"});
        } 

        return res.json({success:true,data:todo,message:"Todo Fetched Successfully"});
        
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,message:"Internal Server Error"});
        
    }
} 

export const deleteTodo = async(req,res) => {
    const {id} = req.params; 

    try {
        const todo = await Todo.findByIdAndDelete(id); 

        if(!todo){
            console.log("Deleted Todo",todo); 
            return res.json({success:true,message:"Todo Deleted Successfully"});
        }
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false,message:"Internal Server Error"});
        
    }
} 

export const updateTodo = async(req,res) => {
    const {id} = req.params; 
    try {
        const todo = await Todo.findByIdAndUpdate(id,req.body,{new:true});

        if(!todo){
            return res.status(400).json({success:false,message:"Cannot Update Todo"});
        }
        
        return res.status(200).json({success:true,data:todo,message:"Todo Updated Successfully"});
    } catch (error) {
        console.log(error.message); 
        return res.status(500).json({success:false,message:"Internal Server Error"});
    }
}