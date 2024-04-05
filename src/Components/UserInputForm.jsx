import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputTitle from "./InputTitle";
import {
  addNewTodo,
  addSelectedTodo,
  updateDoneTodoList,
  updateTodo,
} from "../Redux/todos";

const UserInputForm = () => {
  const todoList = useSelector((state) => state.todos?.todoList);
  const selectedTodo = useSelector((state) => state.todos?.selectedTodo);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [formBtn, setFormBtn] = useState("Add Task");
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
      if (formBtn === "Add Task") {
        dispatch(addNewTodo([...todoList, newTodo]));
      } else {
        let newArr = todoList.map((todo) =>
          todo.id === selectedTodo.id
            ? {
                ...todo,
                title,
                description,
                isComplete: true,
              }
            : todo
        );
        dispatch(updateTodo(newArr));
        dispatch(updateDoneTodoList());
        setFormBtn("Add Task");
        dispatch(addSelectedTodo(""));
      }
      setTitle("");
      setDescription("");
    }
  };

  const handleUncheckCancelTodo = () => {
    let newArr = todoList.map((todo) =>
      todo.id === selectedTodo.id ? { ...todo, isComplete: false } : todo
    );
    dispatch(updateTodo(newArr));
    localStorage.setItem("todoList", JSON.stringify(newArr));
    dispatch(addSelectedTodo(""));
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
      setFormBtn("Done");
    }
  }, [selectedTodo]);
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

        {selectedTodo && (
          <button
            className="cancel-uncheck-todo-btn"
            onClick={handleUncheckCancelTodo}
          >
            Cancel / UnCheck
          </button>
        )}
        <button className="add-task-btn" type="submit">
          {formBtn}
        </button>
      </form>
    </div>
  );
};

export default UserInputForm;
