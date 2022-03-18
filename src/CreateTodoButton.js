import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert("Diste click");
  };

  return (
    <button className="CreateTodoButton" onClick={() => onClickButton("hOLA")}>
      +
    </button>
  );
}

export { CreateTodoButton };
