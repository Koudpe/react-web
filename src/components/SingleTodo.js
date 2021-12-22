import React from "react";

const SingleTodo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  return (
    <div className='single-todo'>
      <input type='checkbox' onClick={handleCheckboxClick} />
      <p style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </p>
      <button onClick={handleRemoveClick} className='button--remove'>
        X
      </button>
    </div>
  ); 
};

export default SingleTodo;
