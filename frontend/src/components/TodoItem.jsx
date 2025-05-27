import React from 'react';
import axios from 'axios';
import { FaTrash, FaCheck } from 'react-icons/fa';

const API_URL = 'http://127.0.0.1:8000/api/todos/';

const TodoItem = ({ todo, fetchTodos }) => {
  const deleteTodo = async () => {
    await axios.delete(`${API_URL}${todo.id}/`);
    fetchTodos();
  };

  const toggleComplete = async () => {
    await axios.patch(`${API_URL}${todo.id}/`, { completed: !todo.completed });
    fetchTodos();
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.title}</span>
      <div>
        <button onClick={toggleComplete}>
          <FaCheck />
        </button>
        <button onClick={deleteTodo}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;