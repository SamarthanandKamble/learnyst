import React from "react";

import { useSelector } from "react-redux";

import Todos from "./Todos";

const TodoSection = () => {
  const selectedTodoSection = useSelector((state) => state.todos?.todoSection);
  const allTodo = useSelector((state) => state.todos?.todoList);
  let filteredTodo;

  if (selectedTodoSection === "Done") {
    filteredTodo = allTodo.filter((todo) => todo.isComplete);
  } else if (selectedTodoSection === "To Do") {
    filteredTodo = allTodo.filter((todo) => !todo.isComplete);
  } else {
    filteredTodo = allTodo;
  }
  return <Todos todos={filteredTodo} />;
};

export default TodoSection;
