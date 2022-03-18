import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

export default function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  search,
  setSearch,
  searchedTodos,
  completeTodos,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {loading && <p>Estamos cargando, no desesperes..</p>}
        {error && <p>Desesperate, hubo un error..</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

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
