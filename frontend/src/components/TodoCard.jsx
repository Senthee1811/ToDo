import React,{useState,useEffect} from 'react'; 
import axios from 'axios';

const TodoCard = () => {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async()=> {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
      setTodos(response.data);
    } 
    fetchTodos();
  },[]);
  return (
    <div>
    {
      todos.map((todo) => (
        <div key={todo.id}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <span>Created At: {todo.date}</span>
        </div>
      ))
    }
    </div>
    
  )
}

export default TodoCard