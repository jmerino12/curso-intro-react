import React, { useState } from "react";
import AppUI from "./AppUI";

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodos = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
