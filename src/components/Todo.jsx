import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "./Action";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  console.log(todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text === "") {
      alert("Enter task");
    } else {
      const action = addTodo(text);
      dispatch(action);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    const action = deleteTodo(id);
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  const handleEditTodo = (data) => {
    const action = editTodo(data);
    dispatch(action);
  };

  return (
    <>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#f2d6d6" }}
          onClick={() =>
            (document.body.style.backgroundColor = "#f2d6d6")(
              (document.body.style.color = "#000")
            )
          }
        ></button>
        <button
          style={{ backgroundColor: "#000" }}
          onClick={() => {
            (document.body.style.backgroundColor = "#000")(
              (document.body.style.color = "#f2f2f2")
            );
          }}
        ></button>
        <button
          style={{ backgroundColor: "#f44336" }}
          onClick={() =>
            (document.body.style.backgroundColor = "#f44336")(
              (document.body.style.color = "#f2f2f2")
            )
          }
        ></button>
        <button
          style={{ backgroundColor: "#2196f3" }}
          onClick={() =>
            (document.body.style.backgroundColor = "#2196f3")(
              (document.body.style.color = "#f2f2f2")
            )
          }
        ></button>
        <button
          style={{ backgroundColor: "#ffeb3b" }}
          onClick={() =>
            (document.body.style.backgroundColor = "#ffeb3b")(
              (document.body.style.color = "#000")
            )
          }
        ></button>
        <button
          style={{ backgroundColor: "violet" }}
          onClick={() =>
            (document.body.style.backgroundColor = "violet")(
              (document.body.style.color = "#f2f2f2")
            )
          }
        ></button>
        <button
          style={{ backgroundColor: "#4caf50" }}
          onClick={() =>
            (document.body.style.backgroundColor = "#4caf50")(
              (document.body.style.color = "#f2f2f2")
            )
          }
        ></button>
      </div>
      <h1>Todo List App</h1>
      <h3>By Anjali Dalal</h3>
      <div className="header">
        <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoList
        data={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </>
  );
};

export default Todo;
