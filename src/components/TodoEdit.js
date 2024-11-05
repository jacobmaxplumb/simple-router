import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TodoEdit = () => {
  const { todoId } = useParams();
  const [todoItem, setTodoItem] = useState(null);
  const navigate = useNavigate();

  const getTodoItem = async () => {
    const { data } = await axios.get(`http://localhost:9000/todos/${todoId}`);
    setTodoItem(data);
  };

  const updateItem = async () => {
    await axios.put(`http://localhost:9000/todos/${todoId}`, todoItem);
    navigate('/');
  }

  useEffect(() => {
    getTodoItem();
  }, []);

  return (
    <>
      <h3>Todo Edit</h3>
      {todoItem && <>
        <div>text: <input value={todoItem.text} onChange={(e) => setTodoItem({...todoItem, text: e.target.value})}/></div>
        <div>completed: <input type="checkbox" checked={todoItem.completed} onChange={(e) => {setTodoItem({...todoItem, completed: e.target.checked})}} /></div>
        <button onClick={updateItem}>Update</button>
        <br />
      </>}
      <button style={{marginTop: '20px'}} onClick={() => navigate('/')}>Back</button>
    </>
  );
};
