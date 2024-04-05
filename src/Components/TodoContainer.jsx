import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNewTodo,
  updateDoneTodoList,
  updateTodo,
  updateTodoSection,
} from "../Redux/todos";
import TodoSection from "./TodoSection";

const todoSectionTitle = ["All", "Done", "To Do"];

class TodoContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    const inCompleteTodoList = JSON.parse(
      localStorage.getItem("inCompleteTodoList")
    );
    const doneTodoList = JSON.parse(localStorage.getItem("doneTodoList"));
    const todoSection = JSON.parse(localStorage.getItem("todoSection"));

    if (todoList || inCompleteTodoList || doneTodoList || todoSection) {
      dispatch(updateTodo(todoList));
      dispatch(updateDoneTodoList());
      dispatch(updateTodoSection("All"));
      console.log("called dispatch");
    }
  }

  render() {
    const { selectedTodoSection, dispatch } = this.props;
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
  }
}

const mapStateToProps = (state) => ({
  selectedTodoSection: state.todos?.todoSection,
});

export default connect(mapStateToProps)(TodoContainer);
