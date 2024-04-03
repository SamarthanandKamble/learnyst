import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoSection } from "../Redux/todos";
import AllTodo from "./Todos";
import TodoSection from "./TodoSection";

const todoSectionTitle = ["All", "Done", "To Do"];

const TodoContainer = () => {
  const selectedTodoSection = useSelector((state) => state.todos?.todoSection);
  const dispatch = useDispatch();
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
