import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    todoSection: "All",
    doneTodoList: [],
    incompleteTodoList: [],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.todoList = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodo: (state, action) => {
      state.todoList = action.payload;
    },
    doneTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodoSection: (state, action) => {
      state.todoSection = action.payload;
    },
    addNewDoneTodo: (state, action) => {
      state.doneTodoList = action.payload;
    },
    addIncompleteTodoList: (state, action) => {
      state.incompleteTodoList = action.payload;
    },
  },
});

export const {
  addNewTodo,
  deleteTodo,
  doneTodo,
  updateTodo,
  updateTodoSection,
  addIncompleteTodoList,
  addNewDoneTodo,
} = todos.actions;

export default todos.reducer;
