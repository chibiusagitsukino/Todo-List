import React, { useState } from 'react'
import TodoList from './components/todoList'
import CardList from './components/cardList'
import todolist from './mock/todolist'

import './App.css'

const App = () => {
  const [list, setList] = useState(todolist)
  return (
    <div className='todo-app'>
      <TodoList />
      <CardList list={list} />
    </div>
  )
}

export default App
