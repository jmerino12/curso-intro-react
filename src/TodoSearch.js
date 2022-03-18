import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [search, setSearch] = useState("");
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
