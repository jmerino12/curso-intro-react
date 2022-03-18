import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
