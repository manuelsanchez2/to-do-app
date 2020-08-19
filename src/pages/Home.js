import React, { useState, useEffect } from "react";
import "../App.css";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheckbox from "../components/ListItemCheckbox";
import { getTodos } from "../api/todos";
import { Link } from "react-router-dom";

function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todos = await getTodos();
      setTodos(todos);
      console.log(todos);
    };
    doFetch();
  }, []);

  return (
    <>
      <header className="app__header">
        <h2>TO DO LIST</h2>
      </header>
      <main className="app__main">
        <List>
          {todos?.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemIcon />
              <ListItemText title={todo.title} date={todo.date} />
              <ListItemCheckbox />
            </ListItem>
          ))}
        </List>
        <Link to="/add">ADD NEW TASK</Link>
      </main>
    </>
  );
}

export default Home;
