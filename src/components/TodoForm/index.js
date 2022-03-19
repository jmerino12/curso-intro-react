import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./ToDoForm.css";
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "LALALALAA", completed: false },
];
export default function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        placeholder="Escribe una nueva tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}
