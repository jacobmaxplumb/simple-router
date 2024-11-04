import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TodoList } from './components/TodoList';
import { TodoEdit } from './components/TodoEdit';

function App() {
  return (
    <div>
      <h1>Todo List App</h1>
      <Routes>
        <Route path="" element={<TodoList />}/>
        <Route path="edit/:todoId" element={<TodoEdit />} />
      </Routes>
    </div>
  );
}

export default App;
