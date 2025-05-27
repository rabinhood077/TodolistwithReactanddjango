import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/todos/'

const AddTodo = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');

  const addTodo = async () => {
    if (title.trim()) {
      await axios.post(API_URL, { title, completed: false });
      setTitle('');
      fetchTodos();
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;

