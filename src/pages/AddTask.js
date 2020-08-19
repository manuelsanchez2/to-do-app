import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";

function AddTask() {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);

  function handleChange() {
    console.log("New task added");
  }

  return (
    <>
      <header className="app__header">
        <h2>ADD NEW TASK</h2>
      </header>
      <main className="app__main">
        <form>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Date:
            <input type="date" name="date" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/home">BACK TO HOME</Link>
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

export default AddTask;
