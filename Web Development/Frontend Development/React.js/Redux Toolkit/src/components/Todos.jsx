import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos=useSelector((state) => state.todos)
    const dispatch=useDispatch()
  return (
    <div>
      {todos.map((i)=>{
        return (
            <li key={i.id}>
                {i.text}
                <button onClick={()=>dispatch(removeTodo(i.id))}>
                    X
                </button>
            </li>
        )
      })}
    </div>
  )
}

export default Todos
