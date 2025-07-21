import express from "express"; 
import { CreateTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from "../controllers/todoController.js"; 

const router = express.Router(); 

router.get("/todos",getAllTodos); 
router.post("/addtodo",CreateTodo); 
router.get("/todo/:id",getTodo); 
router.put("/updatetodo/:id",updateTodo); 
router.delete("/deleteTodo/:id",deleteTodo); 

export default router;