import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
