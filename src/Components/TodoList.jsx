import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updatingTodo } from "../Redux/TodoStates/TodoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    dispatch(updatingTodo(id));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-8">
      <h1 className="text-white text-4xl font-bold">Todos List</h1>
      <ul className="">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="bg-gray-900 p-3 rounded-md mb-3 w-full">
              <div className="flex justify-between items-center gap-4">
                <p name="editDiv" className="w-1/2 text-white text-xl font-semibold">{todo.title}</p>
                <button
                  onClick={() => {
                    handleUpdate(todo.id);
                  }}
                  className="btn px-3 py-2 border-2 border-black rounded bg-blue-700 text-white font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="btn px-3 py-2 border-2 border-black rounded bg-red-700 text-white font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
        {/* <li>
            <div className='flex justify-between items-center gap-4'>
                <p className='text-white text-xl font-semibold'>Coding</p>
                <button className='btn px-3 py-2 border-2 border-black rounded bg-blue-700 text-white font-semibold'>Edit</button>
                <button className='btn px-3 py-2 border-2 border-black rounded bg-red-700 text-white font-semibold'>Delete</button>
            </div>
        </li> */}
      </ul>
    </div>
  );
};

export default TodoList;
