import React from "react";
import "../App.css";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheckbox from "../components/ListItemCheckbox";
import { getTodos } from "../api/todos";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <>
      <header className="app__header">
        <h2>TO DO LIST</h2>
      </header>
      <main className="app__main">
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
      <footer className="app__footer">
        <Link to="/home">
          <img src={listSrc} alt="home" />
        </Link>
        <Link to="/add">
          <ButtonPlus />
        </Link>
        <Link to="/settings">
          <img src={settingsSrc} alt="settings" />
        </Link>
      </footer>
    </>
  );
}

export default Home;
