import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/TodoStates/TodoSlice";

const AddTodo = () => {
  const inputRef = useRef();

  const [input, setinput] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todo = todos.todos.find((todo) => todo.updatingTodo === true);
    if (todo && todo.updatingTodo === true) {
      inputRef.current.value = todo.title;
      setinput(todo.title);
      inputRef.current.focus();
      dispatch(deleteTodo(todo.id));
    }
  }, [todos, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Please enter a todo item");
      return;
    }
    dispatch(addTodo({ title: input }));
    setinput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center gap-4 p-10 "
    >
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="type your todo..."
        className="inputTodo w-1/2 border-2 border-gray-300 rounded-md p-2 text-white bg-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button className="btn px-3 py-2 border-2 border-black rounded bg-blue-700 text-white font-semibold">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
