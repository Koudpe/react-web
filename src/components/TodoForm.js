import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type='text'
        value={todo.task}
        onChange={handleTaskInputChange}
        placeholder='Set to do...'
      />
      <button type='submit' className='button--add'>
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
