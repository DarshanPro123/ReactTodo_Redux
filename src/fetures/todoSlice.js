import { createSlice, nanoid } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [{ id: 1, list: "Todo Here" }]
    },

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                list: action.payload,
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.list = action.payload.list
            }
        }
        // editTodo: (state, action) => {

        // }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
