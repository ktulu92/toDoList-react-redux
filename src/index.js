import React from "react";
import reactDom from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";






const loginBox = null

const App = () => {
  return (
    <div>
        <span>{new Date().toString()}</span>
        {loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
