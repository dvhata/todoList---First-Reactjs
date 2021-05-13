import Todo from "./Todo";
import React from "react";

// nhan vao props todoList
const todoList = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};


export default todoList;
