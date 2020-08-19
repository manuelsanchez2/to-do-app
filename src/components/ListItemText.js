import React from "react";
import "./ListItemText.css";

function ListItemText({ title, author, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{author}</span>
      <span className="listItemText__date">{date}</span>
    </div>
  );
}

export default ListItemText;
