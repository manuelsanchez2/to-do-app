import React from "react";
import "../App.css";
import List from "../components/list/List";
import ListItem from "../components/list/ListItem";
import { getTodos } from "../api/todos";
import useAsync from "../hooks/useAsync";
// import styled from "@emotion/styled";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import StyledMain from "../components/StyledMain";
import PageContainer from "../components/PageContainer";

function Home() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <PageContainer>
      <StyledHeader>
        <h2>TO DO LIST</h2>
      </StyledHeader>
      <StyledMain>
        <button>REFRESH ME</button>
        {error && <div>FATAL ERROR...</div>}
        {loading && <div>Page is loading...</div>}
        <List>
          {todos?.map((todo) => (
            <ListItem todo={todo} key={todo.id} />
          ))}
        </List>
      </StyledMain>
      <StyledFooter />
    </PageContainer>
  );
}

export default Home;
