import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../Redux/todos";
import InputTitle from "./InputTitle";

const UserInputForm = () => {
  const todoList = useSelector((state) => state.todos?.todoList);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && description.length > 0) {
      const newTodo = {
        id: todoList?.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        title,
        description,
        isComplete: false,
        isDropdownOpen: false,
      };

      dispatch(addNewTodo([...todoList, newTodo]));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="user-input-form-container">
      <span className="form-header">Add task</span>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="task-title">
          <InputTitle title={"Task Title"} />
          <div className="input-fields">
            <input
              type="text"
              id="task-title"
              placeholder="Enter task title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required={true}
            />
          </div>
        </label>
        <label htmlFor="task-description">
          <InputTitle title={"Task Description"} />
          <div className="input-fields">
            <input
              type="text"
              id="task-description"
              className="input"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={true}
            />
          </div>
        </label>

        <button className="add-task-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default UserInputForm;
