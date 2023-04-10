import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./Todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
