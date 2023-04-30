import React, { useState, useEffect } from "react";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import { addTodo } from "../redux/Todos/todosSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Todo() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  // Local Storage'dan verileri yükle
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => dispatch(addTodo(todo)));
  }, []);

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();

    const newTodo = { id: nanoid(), title, completed: false };
    dispatch(addTodo(newTodo));
    setTitle("");

    // Local Storage'a kaydet
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
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
