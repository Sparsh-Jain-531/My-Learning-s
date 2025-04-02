import { createSlice } from "@reduxjs/toolkit"

const initialState={
    todos:[{id: 1, text:"hello world"}]
}

export const todoSlice=createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id: Date.now(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state, action)=>{
            const todo=state.todos.find((todo)=>todo.id===action.payload)
            todo.text=action.payload;
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer;