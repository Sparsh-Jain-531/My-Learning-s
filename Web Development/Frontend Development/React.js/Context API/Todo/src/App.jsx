import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/Todoitem";

const App = () => {

  const [todos, setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo=(id, todo)=>{
    setTodos((prev)=>prev.map((i)=>(i.id===id ? todo : i)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((i)=>i.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((i)=>i.id===id ? {...i, completed: !i.completed} : i))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((i)=>(
              <div key={i.id} className="w-full">
                <TodoItem todo={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
