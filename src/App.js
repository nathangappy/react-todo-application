import React, { Component } from 'react';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css'

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let newTodos = [...this.state.todos, todo]
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>My To Do List!</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
