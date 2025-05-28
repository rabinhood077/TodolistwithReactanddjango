// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TodoItem from './TodoItem';
// import AddTodo from './AddTodo';

// const API_URL = 'http://127.0.0.1:8000/api/todos/';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   const fetchTodos = async () => {
//     const res = await axios.get(API_URL);
//     setTodos(res.data);
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   return (
//     <div className="todo-container">
//       <h1>Todo List</h1>
//       <AddTodo fetchTodos={fetchTodos} />
//       <ul className="todo-list">
//         {todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const API_URL = 'http://127.0.0.1:8000/api/todos/';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <AddTodo fetchTodos={fetchTodos} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            fetchTodos={fetchTodos} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;