import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({ setMode }) => {
  const handleModeToggle = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="p-4 bg-gray-200 dark:bg-gray-900 flex justify-between items-center">
      <Link to="/" className="text-blue-500 hover:text-blue-700">Todo List</Link>
      <Link to="/result" className="text-blue-500 hover:text-blue-700">Results</Link>
      <Link to="/cart" className="text-blue-500 hover:text-blue-700">Cart</Link>
      <button onClick={handleModeToggle} className="text-gray-600 dark:text-gray-300">
        {localStorage.getItem('mode') === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </nav>
  );
};

export default Navbar;
