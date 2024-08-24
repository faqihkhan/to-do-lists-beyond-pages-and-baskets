import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoResults = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <header className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Todo List</Link>
      </header>
      <h1 className="text-2xl font-bold text-center mb-4">Todo Results</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="bg-white p-4 mb-2 rounded shadow-md">
            <h2 className="text-xl text-gray-600 font-bold">{todo.title}</h2>
            <p className="text-gray-600">{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoResults;
