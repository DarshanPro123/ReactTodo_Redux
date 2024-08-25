import React, { useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../fetures/todoSlice";
import "tailwindcss/tailwind.css";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [inputEdit, setInputEdit] = useState("");
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const addTodos = () => {
    if (input.trim() === "") return; // Prevent adding empty todos
    dispatch(addTodo(input));
    setInput("");
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const startEditing = (id, list) => {
    setEditingId(id);
    setInputEdit(list);
  };

  const saveTodo = (id) => {
    if (inputEdit.trim() === "") return; // Prevent saving empty todos
    dispatch(updateTodo(inputEdit, id));
    setEditingId(null);
    setInputEdit("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2 outline-none text-gray-700 font-medium w-[80%]"
          placeholder="Add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodos}
          className="bg-blue-500 rounded w-[10%] text-white p-3"
        >
          Add
        </button>
      </div>
      <ul className="list-none">
        {todos.map((todo) => {
          const { id, list } = todo;
          return (
            <li
              key={id}
              className="flex justify-between mb-[20px] items-center border p-2 mb-2"
            >
              {editingId === id ? (
                <input
                  type="text"
                  className="border p-2 mr-2 outline-none text-gray-700 font-medium w-[80%]"
                  placeholder="Edit todo"
                  value={inputEdit}
                  onChange={(e) => setInputEdit(e.target.value)}
                />
              ) : (
                <p>{list}</p>
              )}
              <div>
                {editingId === id ? (
                  <button
                    onClick={() => saveTodo(id)}
                    className="text-green-500 p-3 bg-lime-600 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(id, list)}
                    className="text-orange-500 p-3 bg-lime-600 mr-2"
                  >
                    <FaPencilAlt />
                  </button>
                )}
                <button
                  className="text-red-500 p-3 bg-orange-300"
                  onClick={() => removeTodo(id)}
                >
                  <FaTimes />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;
