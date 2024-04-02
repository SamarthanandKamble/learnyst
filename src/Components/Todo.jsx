import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todos?.todoList);

  return (
    <>
      {/* <div className="todo-items-container">
        <div className="checkbox-cnt">
          <input type="checkbox" id="myCheckBox" />
        </div>
        <div className="todo-content">content</div>
        <div className="todo-dropdown">
          <img src={"/DownIcon.svg"} alt="v" className="dropdown-down" />
        </div>
      </div> */}

      <ul className="todo-items-container">
        {todos.map((todo) => {
          return (
            <li key={todo}>
              <div className="checkbox-cnt">
                <input type="checkbox" id="myCheckBox" />
              </div>
              <div className="todo-content">{todo.title}</div>
              <div className="todo-dropdown">
                <img src={"/DownIcon.svg"} alt="v" className="dropdown-down" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
