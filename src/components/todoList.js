import Todo from "./Todo";
import React from "react";

// nhan vao props todoList
const todoList = ({ todoList, onCheckButtonClick }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckButtonClick={onCheckButtonClick}/>
      ))}
    </>
  );
};


export default todoList;
