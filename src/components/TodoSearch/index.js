import React from "react";
import "./TodoSearch.css";

function TodoSearch({ search, setSearch }) {
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
