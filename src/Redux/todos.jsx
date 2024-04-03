import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    todoSection: "All",
    // doneTodoList: [],
    // inCompleteTodoList: [],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.todoList = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodo: (state, action) => {
      const updatedTodoList = action.payload;
      state.todoList = updatedTodoList;
      state.doneTodoList = updatedTodoList.filter((todo) => todo.isComplete);
      state.inCompleteTodoList = updatedTodoList.filter(
        (todo) => !todo.isComplete
      );
    },
    doneTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodoSection: (state, action) => {
      state.todoSection = action.payload;
    },
    // addNewDoneTodo: (state, action) => {
    //   state.doneTodoList = action.payload;
    // },
    // addIncompleteTodoList: (state, action) => {
    //   state.inCompleteTodoList = action.payload;
    // },
  },
});

export const {
  addNewTodo,
  deleteTodo,
  doneTodo,
  updateTodo,
  updateTodoSection,
  // addIncompleteTodoList,
  // addNewDoneTodo,
} = todos.actions;

export default todos.reducer;
