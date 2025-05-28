// import React from 'react';
// import axios from 'axios';
// import { FaTrash, FaCheck } from 'react-icons/fa';

// const API_URL = 'http://127.0.0.1:8000/api/todos/';

// const TodoItem = ({ todo, fetchTodos }) => {
//   const deleteTodo = async () => {
//     await axios.delete(`${API_URL}${todo.id}/`);
//     fetchTodos();
//   };

//   const toggleComplete = async () => {
//     await axios.patch(`${API_URL}${todo.id}/`, { completed: !todo.completed });
//     fetchTodos();
//   };

//   return (
//     <li className={todo.completed ? 'completed' : ''}>
//       <span>{todo.title}</span>
//       <div>
//         <button onClick={toggleComplete}>
//           <FaCheck />
//         </button>
//         <button onClick={deleteTodo}>
//           <FaTrash />
//         </button>
//       </div>
//     </li>
//   );
// };

// export default TodoItem;

import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaCheck, FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}/`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleComplete = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/todos/${todo.id}/`, { 
        completed: !todo.completed 
      });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const updateTodo = async () => {
    if (!editedTitle.trim()) return;
    
    try {
      await axios.patch(`http://127.0.0.1:8000/api/todos/${todo.id}/`, {
        title: editedTitle.trim()
      });
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="edit-input"
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.title}</span>
      )}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={updateTodo} className="save-btn">
            <FaSave />
          </button>
        ) : (
          <>
            <button onClick={toggleComplete} className="complete-btn">
              <FaCheck />
            </button>
            <button 
              onClick={() => setIsEditing(true)} 
              className="edit-btn"
            >
              <FaEdit />
            </button>
          </>
        )}
        <button onClick={deleteTodo} className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;