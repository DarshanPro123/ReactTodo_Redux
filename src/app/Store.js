import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../fetures/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});