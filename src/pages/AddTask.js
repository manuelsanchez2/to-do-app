import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";

function AddTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted" + " " + title + " " + author);
  }

  console.log(title, author, date);

  return (
    <>
      <header className="app__header">
        <h2>ADD NEW TASK</h2>
      </header>
      <main className="app__main">
        <form onSubmit={handleSubmit}>
          <label className="app__main__input">
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label className="app__main__input">
            Author:
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleAuthorChange}
            />
          </label>
          <label className="app__main__input">
            Date:
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
          <input type="submit" value="add task" />
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
