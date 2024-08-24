// src/components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTodo, existingTodo }) => {
  const [title, setTitle] = useState(existingTodo ? existingTodo.title : '');
  const [description, setDescription] = useState(existingTodo ? existingTodo.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTodo({ title, description, image: 'default.jpg' });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded focus:outline-none focus:ring"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded focus:outline-none focus:ring h-24"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
    </form>
  );
};

export default TodoForm;
