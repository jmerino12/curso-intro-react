import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">{`Has completado ${completedTodos}/${totalTodos} TODOs`}</h2>
  );
}

export { TodoCounter };
