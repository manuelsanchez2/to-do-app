import React from "react";
import "./ListItem.css";

function ListItem({ children }) {
  return (
    <a className="listItem" href="#hola">
      {children}
    </a>
  );
}

export default ListItem;
