import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {
    const [input, setInput] = React.useState('')
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodos
