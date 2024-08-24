import React, { useState, useEffect, useRef } from 'react';
import ReactHowler from 'react-howler';
import clickSound from '../sound/soap-bubbles-pop-96873.mp3'; // Path ke file suara
import { Link } from 'react-router-dom';

const TodoList = ({ addToCart }) => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [alert, setAlert] = useState('');
  const soundRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (title.trim() && description.trim()) {
      setTodos([...todos, { title: title.trim(), description: description.trim() }]);
      setTitle('');
      setDescription('');
      setAlert('Todo added successfully!');
      soundRef.current.play(); // Play sound on add
      setTimeout(() => setAlert(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <ReactHowler src={clickSound} ref={soundRef} />
      <header className="flex justify-between items-center mb-4">
        <Link to="/cart" className="text-blue-500 hover:text-blue-700">Cart</Link>
        <Link to="/result" className="text-blue-500 hover:text-blue-700">Results</Link>
      </header>
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border rounded w-full mb-2 bg-gray-200 text-gray-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border rounded w-full mb-2 bg-gray-200 text-gray-500"
          rows="4"
        />
        <button
          onClick={handleAddTodo}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      {alert && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {alert}
        </div>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="bg-gray-200 p-4 mb-2 rounded shadow-md">
            <h2 className="text-xl text-black font-bold">{todo.title}</h2>
            <p className="text-gray-600 truncate max-w-xs">{todo.description}</p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => addToCart(todo)}
                className="text-green-500 hover:text-green-700 mr-2"
              >
                Add to Cart
              </button>
              {/* Edit and Delete buttons will be added here */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
