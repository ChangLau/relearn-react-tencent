import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, deleteTodo } from "../../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <li className="todo-item">
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.content}
    </span>{" "}
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </li>
);

// export default Todo;
export default connect(null, { toggleTodo, deleteTodo })(Todo);
