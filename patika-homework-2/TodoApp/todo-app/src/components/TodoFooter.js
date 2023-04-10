import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  clearCompleted,
  selectTodos,
  selectActiveFilter,
} from "../redux/Todos/todosSlice";
function TodoFooter() {
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector(selectActiveFilter);

  const dispatch = useDispatch();
  return (
    <footer className="todo__footer">
      <div>
        <span>
          <strong>{itemsLeft} </strong>
          {itemsLeft === 1 ? "item left" : "items left"}
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeFilter === "all" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("all"))}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "active" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("active"))}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("completed"))}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear__completed"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
}

export default TodoFooter;
