import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id}>
          <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
          <button
            className='btn-small red right'
            onClick={() => { deleteTodo(todo.id) }}
          >
            Delete
          </button>
        </div>
      )
    })
  ) : (
      <p className='center'>You have no Todo's</p>
    )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos;
