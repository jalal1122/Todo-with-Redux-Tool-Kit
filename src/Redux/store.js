import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./TodoStates/TodoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice, 
    }
});