import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  updateDoneTodoList,
  updateTodo,
  updateTodoSection,
} from "../Redux/todos";
import TodoSection from "./TodoSection";

const todoSectionTitle = ["All", "Done", "To Do"];

const TodoContainer = () => {
  const selectedTodoSection = useSelector((state) => state.todos?.todoSection);
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const inCompleteTodoList = JSON.parse(
      localStorage.getItem("inCompleteTodoList")
    );
    const doneTodoList = JSON.parse(localStorage.getItem("doneTodoList"));
    const todoSection = JSON.parse(localStorage.getItem("todoSection"));

    console.log(
      "todoList",
      todoList,
      "incompletelist",
      inCompleteTodoList,
      "doneTodoList",
      doneTodoList
    );

    if (todoList || inCompleteTodoList || doneTodoList || todoSection) {
      dispatch(updateTodo(todoList));
      dispatch(updateDoneTodoList());
      dispatch(updateTodoSection("All"));
      console.log("called dispatch");
    }
  }, [dispatch]);
  return (
    <div className="todo-container">
      <div className="todo-container-header">To do tasks</div>
      <div className="todo-section-title-container">
        {todoSectionTitle.map((title) => (
          <span
            key={title}
            className={
              selectedTodoSection === title
                ? "todo-section-color-selected"
                : "todo-section-color"
            }
            onClick={() => dispatch(updateTodoSection(title))}
          >
            {title}
          </span>
        ))}
      </div>
      <TodoSection title={selectedTodoSection} />
    </div>
  );
};

export default TodoContainer;
