import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
