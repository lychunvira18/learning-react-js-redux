import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(Todo => {
      return (
        <div className="collection-item" key={Todo.id}>
          <span
            onClick={() => {
              deleteTodo(Todo.id);
            }}
          >
            {Todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <div>
      <span>There are no todos left.</span>
    </div>
  );
  return <div className="collection">{todoList}</div>;
};

export default Todos;
