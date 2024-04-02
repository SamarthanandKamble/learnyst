import React from "react";
import UserInputForm from "./UserInputForm";
import TodoContainer from "./TodoContainer";

const Home = () => {
  return (
    <div className="home">
      <UserInputForm />
      <TodoContainer />
    </div>
  );
};

export default Home;
