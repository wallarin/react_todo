import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
