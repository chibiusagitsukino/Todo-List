import { useState } from 'react'
import TodoForm from '../todoForm/TodoForm'

import Todo from '../todo/Todo'

function TodoList() {
  const [todos, setTodos] = useState([])
  // const [todos, setTodos] = useState(todoList);

  const addTodo = (todo) => {
    if (!todo.text || new RegExp('^\\s*$').test(todo.text)) {
      return
    }

    //

    const existingTodo = todos.find((item) => item.text === todo.text)
    if (existingTodo) {
      alert(`The todo "${todo.text}" is already in the list.`)
      return
    }

    //

    let newTodos = [todo, ...todos]

    setTodos(newTodos.sort((a, b) => a.text.localeCompare(b.text)))
    console.log(...todos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || new RegExp('^\\s*$').test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removedArr)
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default TodoList
