import React, { useState } from "react";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import { addTodo } from "../redux/Todos/todosSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Todo() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();

    dispatch(addTodo({ id: nanoid(), title, completed: false }));
    setTitle("");
  };
  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default Todo;
