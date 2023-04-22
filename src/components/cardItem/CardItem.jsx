import './index.css'

const CardItem = ({ todo, addTodo }) => {
  return (
    <li className='todo-row' key={todo.id}>
      {todo.text}
    </li>
  )
}

export default CardItem
