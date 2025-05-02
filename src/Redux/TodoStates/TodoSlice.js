import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        updatingTodo: false,
      };

      state.todos.push(todo);
    },

    updateTodo: (state, action) => {
      const { id } = action.payload;
      const todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = todos;
    },
    updatingTodo: (state, action) => {
      const id = action.payload;
      let todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.updatingTodo = !todo.updatingTodo;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = todos;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updatingTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
