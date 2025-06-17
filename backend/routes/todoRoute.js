import express from "express"; 
import { createTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from "../controllers/todoController.js"; 

const router = express.Router(); 

router.get("/todos",getAllTodos); 
router.post("/addtodo",createTodo); 
router.get("/todo/:id",getTodo); 
router.put("/updatetodo/:id",updateTodo); 
router.delete("/deleteTodo/:id",deleteTodo); 

export default router;