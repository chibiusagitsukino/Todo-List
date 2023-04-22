import { useState } from 'react'
import todolist from '../../mock/todolist'
import CardItem from '../cardItem'
import './index.css'

const CardList = ({ list }) => {
  const [todos, setTodos] = useState(list)

  const addTodo = (newTodo) => {
    // Controllo se l'attività è già presente nella lista
    const isDuplicate = todos.some((todo) => todo.text === newTodo.text)

    if (isDuplicate) {
      alert('Questa attività è già presente nella lista.')
      return
    }

    // Aggiungo la nuova attività alla lista
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  return (
    <ul>
      {todos.map((todo) => (
        <CardItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default CardList
