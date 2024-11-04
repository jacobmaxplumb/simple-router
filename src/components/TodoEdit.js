import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TodoEdit = () => {
  const { todoId } = useParams();
//   const [todoItem, setTodoItem] = useState(null);
//   const navigate = useNavigate();

//   const getTodoItem = async () => {
//     const { data } = await axios.get(`http://localhost:9000/todos/${todoId}`);
//     setTodoItem(data);
//   };

//   useEffect(() => {
//     getTodoItem();
//   }, []);

  return (
    <>
      {/* <h3>Todo Edit</h3>
      {todoItem && <p>{todoItem.text}</p>}
      <button onClick={() => navigate('/')}>Back</button> */}
      <h3>{todoId}</h3>
    </>
  );
};
