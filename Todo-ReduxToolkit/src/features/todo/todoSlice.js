import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // the state and action are always accessable.
        // state will provide us the values which are present in our initialState
        // actions will provide us the ids of retrived values.
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload, // payload is an object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) // match and remove the id after (true) checking and return the remaining values
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=> 
                todo.id === action.payload.id ? {...todo, text:action.payload.text} : todo) // For updating the todo we have to use map method
        }
    }
})

// First export all functuntionalities
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// Second export the reducer
export default todoSlice.reducer