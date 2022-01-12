import React from "react";
import reactDom from "react-dom";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

// import "..//index.css"

const todoData = [
    { label: "Drink Cofee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have Lunch", important: false, id: 3 },
  ];
  

const App = () => {
    return (
      <div className="todo-app">
        
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter/>
        </div>
        <TodoList todos={todoData} />
      </div>
    );
  };

  export default App;