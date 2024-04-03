import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../Redux/todos";

const Todo = () => {
  const todos = useSelector((state) => state.todos?.todoList);
  const dispatch = useDispatch();

  const handleDropDown = (id) => {
    let newArr = todos.map((todo) =>
      todo?.id === id ? { ...todo, isDropdownOpen: !todo.isDropdownOpen } : todo
    );
    dispatch(updateTodo(newArr));
  };

  const handleSelectedTodo = (id) => {
    let newArr = todos.map((todo) =>
      todo?.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    dispatch(updateTodo(newArr));
  };

  return (
    <>
      <ul className="todo-items-container">
        {todos.map((todo) => {
          return (
            <li key={todo?.id} className="li-container">
              <div className="todo-list-container">
                <div className="checkbox-cnt">
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    onChange={() => handleSelectedTodo(todo?.id)}
                  />
                </div>
                <div
                  className={
                    todo?.isComplete ? "todo-content-selected" : "todo-content"
                  }
                >
                  {todo.title}
                </div>
                <div className="todo-dropdown">
                  <img
                    src={todo?.isDropdownOpen ? "/UpIcon.svg" : "/DownIcon.svg"}
                    alt="open/close toggler"
                    className="dropdown-down"
                    onClick={() => handleDropDown(todo?.id)}
                  />
                </div>
              </div>
              {todo?.isDropdownOpen && (
                <div className="todo-description">{todo?.description}</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
