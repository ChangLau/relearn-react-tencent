import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log("TodoApp Done!");
  });
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
