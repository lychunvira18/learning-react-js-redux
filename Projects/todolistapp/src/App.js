import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

class App extends Component {
  state = {
    Todos: [
      { id: 1, content: "Do the dishes..." },
      { id: 2, content: "Do your laundry..." }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.Todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      Todos: todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.Todos, todo];
    this.setState({
      Todos: todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo App</h1>
        <Todos todos={this.state.Todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
