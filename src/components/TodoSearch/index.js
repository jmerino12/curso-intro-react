import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext);

  const onSearchValueChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
