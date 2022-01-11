import React from "react";
import ToDoListItem from "./todo-list-item";

const TodoList = () => {
   
  return (
    <ul>
      <li><ToDoListItem label="drink cofee"/></li>
      <li><ToDoListItem label="drink cofee" important/></li>
    </ul>
  );
};

export default TodoList;