import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import ReactHowler from 'react-howler';
import clickSound from '../sound/soap-bubbles-pop-96873.mp3'; // Path ke file suara

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const soundRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    soundRef.current.play(); // Play sound on remove
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <ReactHowler src={clickSound} ref={soundRef} />
      <header className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Todo List</Link>
      </header>
      <h1 className="text-2xl font-bold text-center mb-4">Cart</h1>
      <table className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2">No.</th>
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="border-b dark:border-gray-600">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 truncate max-w-xs">{item.title}</td>
              <td className="p-2 truncate max-w-xs">{item.description}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
