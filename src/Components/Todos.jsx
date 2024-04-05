import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedTodo, updateTodo } from "../Redux/todos";

const Todos = ({ todos }) => {
  const todoList = useSelector((state) => state.todos?.todoList);
  const dispatch = useDispatch();

  const handleDropDown = (id) => {
    let newArr = todoList?.map((todo) =>
      todo?.id === id ? { ...todo, isDropdownOpen: !todo.isDropdownOpen } : todo
    );
    dispatch(updateTodo(newArr));
  };

  const handleSelectedTodo = (e, todo) => {
    dispatch(addSelectedTodo(todo));
  };

  if (todos?.length > 0 && todoList?.length > 0) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    return;
  }

  return (
    <>
      <ul className="todo-items-container">
        {todos?.map((todo) => {
          return (
            <li key={todo?.id} className="li-container">
              <div className="todo-list-container">
                <div className="checkbox-cnt">
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    checked={todo.isComplete}
                    onChange={(e) => handleSelectedTodo(e, todo)}
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

export default Todos;
