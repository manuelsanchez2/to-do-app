import React from "react";
import styled from "@emotion/styled";

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

function ListItem({ children }) {
  return <ListContainer href="#hola">{children}</ListContainer>;
}

export default ListItem;
