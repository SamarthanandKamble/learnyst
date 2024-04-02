import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todos";
export const store = configureStore({
  reducer: {
    todos: todoListReducer,
  },
});
