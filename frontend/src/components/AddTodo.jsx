// import React, { useState } from 'react';
// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/api/todos/'

// const AddTodo = ({ fetchTodos }) => {
//   const [title, setTitle] = useState('');

//   const addTodo = async () => {
//     if (title.trim()) {
//       await axios.post(API_URL, { title, completed: false });
//       setTitle('');
//       fetchTodos();
//     }
//   };

//   return (
//     <div className="add-todo">
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Add a new task..."
//       />
//       <button onClick={addTodo}>Add</button>
//     </div>
//   );
// };

// export default AddTodo;


import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task cannot be empty');
      return;
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/todos/', { 
        title: title.trim(), 
        completed: false 
      });
      setTitle('');
      setError('');
      fetchTodos();
    } catch (err) {
      setError('Failed to add task');
      console.error('Error adding todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError('');
        }}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
      {error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default AddTodo;