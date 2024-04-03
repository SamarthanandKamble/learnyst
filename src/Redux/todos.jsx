import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    todoSection: "All",
    doneTodoList: [],
    selectedTodo: null,
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.todoList = action.payload;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
      state.inCompleteTodoList = action.payload.filter(
        (todo) => !todo.isComplete
      );
      localStorage.setItem(
        "inCompleteTodoList",
        JSON.stringify(state.inCompleteTodoList)
      );
    },
    deleteTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodo: (state, action) => {
      const updatedTodoList = action.payload;
      state.todoList = updatedTodoList;
      state.inCompleteTodoList = updatedTodoList.filter(
        (todo) => !todo.isComplete
      );
      localStorage.setItem(
        "inCompleteTodoList",
        JSON.stringify(state.inCompleteTodoList)
      );
    },
    doneTodo: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodoSection: (state, action) => {
      state.todoSection = action.payload;
      localStorage.setItem("todoSection", JSON.stringify(state.todoSection));
    },
    updateDoneTodoList: (state) => {
      state.doneTodoList = state.todoList.filter((todo) => todo.isComplete);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
      localStorage.setItem("doneTodoList", JSON.stringify(state.doneTodoList));
    },
    addSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
  },
});

export const {
  addNewTodo,
  deleteTodo,
  doneTodo,
  updateTodo,
  updateTodoSection,
  addSelectedTodo,
  updateDoneTodoList,
} = todos.actions;

export default todos.reducer;
