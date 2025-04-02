import React from 'react'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'

const App = () => {
  return (
    <div>
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App
