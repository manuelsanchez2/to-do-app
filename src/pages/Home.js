import React from "react";
import "../App.css";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheckbox from "../components/ListItemCheckbox";
import { getTodos } from "../api/todos";
import useAsync from "../hooks/useAsync";
// import styled from "@emotion/styled";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";

function Home() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <>
      <StyledHeader>
        <h2>TO DO LIST</h2>
      </StyledHeader>
      <main className="app__main">
        <button>REFRESH ME</button>
        {error && <div>FATAL ERROR...</div>}
        {loading && <div>Page is loading...</div>}
        <List>
          {todos?.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemIcon />
              <ListItemText
                title={todo.title}
                author={todo.author}
                date={todo.date}
              />
              <ListItemCheckbox />
            </ListItem>
          ))}
        </List>
      </main>
      <StyledFooter />
    </>
  );
}

export default Home;
