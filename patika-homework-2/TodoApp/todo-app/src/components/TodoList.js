import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  updateTodo,
  selectFilteredTodos,
} from "../redux/Todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();

  const filteredTodos = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };

  const handleEdit = (id, title) => {
    const newTitle = window.prompt("Edit todo:", title);
    if (newTitle && newTitle.trim() !== "") {
      dispatch(updateTodo({ id: id, title: newTitle }));
    }
  };

  return (
    <ul className="todolist">
      {filteredTodos.map((item) => (
        <li
          key={item.id}
          className={item.completed ? "todo__item completed" : "todo__item"}
        >
          <div className="todo__item-display">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <div className="buttons">
              <button onClick={() => handleEdit(item.id, item.title)}>
                <EditIcon />
              </button>
              <button onClick={() => handleDestroy(item.id)}>
                <CloseIcon />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
