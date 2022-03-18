import React, { useContext } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from "../components/TodoContext";

export default function AppUI() {
  const { error, loading, searchedTodos, completeTodos, deleteTodo } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

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
