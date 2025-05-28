// import './App.css';
// import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <header className="app-header">
//         <h1>My Todo App</h1>
//       </header>
      
//       <main className="app-main">
//         <TodoList />
//       </main>

//       <footer className="app-footer">
//         <p>© {new Date().getFullYear()} Todo App</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;