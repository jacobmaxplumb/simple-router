import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const getTodoItems = async () => {
    const {data} = await axios.get('http://localhost:9000/todos');
    setTodos(data);
  }

  const addTodoItem = async() => {
    const todoItem = {text: text, completed: false};
    const {data} = await axios.post('http://localhost:9000/todos', todoItem);
    setTodos([...todos, data]);
  }

  useEffect(() => {
    getTodoItems();
  }, [])

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li onClick={() => navigate(`edit/${todo.id}`)} key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};
