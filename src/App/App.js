import React, { useState } from "react";
import AppUI from "./AppUI";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [search, setSearch] = useState("");
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
