import React from "react";
import styled from "@emotion/styled";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";
import ListItemCheckbox from "./ListItemCheckbox";

const ListContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 15px 0;
  text-decoration: none;
  border-bottom: 1px solid black;

  *:first-child {
    margin: 0 10px;
  }
  *:last-child {
    margin: 0 15px;
  }
  h3 {
    margin: 0;
  }
`;

function ListItem({ todo }) {
  return (
    <ListContainer href="#hola">
      <ListItemIcon />
      <ListItemText title={todo.title} author={todo.author} date={todo.date} />
      <ListItemCheckbox />
    </ListContainer>
  );
}

export default ListItem;
