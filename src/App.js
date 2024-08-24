import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './pages/TodoList';
import TodoResults from './pages/TodoResults';
import Cart from './pages/Cart';
import ReactHowler from 'react-howler';
import clickSound from './sound/soap-bubbles-pop-96873.mp3'; // Path ke file suara

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('mode', mode);
    document.body.className = mode === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white';
  }, [mode]);

  const addToCart = (todo) => {
    setCartItems([...cartItems, todo]);
  };

  return (
    <Router>
      <div>
        <ReactHowler src={clickSound} />
        <Navbar setMode={setMode} />
        <Routes>
          <Route path="/" element={<TodoList addToCart={addToCart} />} />
          <Route path="/result" element={<TodoResults />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
