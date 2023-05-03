import React from 'react'

const ListItem = ({todo , deleteTodo}) => {
  return (
    <li className="list-group-item rounded-0">
        {todo.text}
        <button className="btn btn-danger btn-sm rounded-0 float-end" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default ListItem
