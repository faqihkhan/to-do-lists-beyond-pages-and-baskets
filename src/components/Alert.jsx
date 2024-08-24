// src/components/Alert.jsx
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Alert = ({ message }) => {
  return (
    <div className="bg-green-500 text-white p-4 rounded flex items-center">
      <AiOutlineCheckCircle className="mr-2" />
      {message}
    </div>
  );
};

export default Alert;
