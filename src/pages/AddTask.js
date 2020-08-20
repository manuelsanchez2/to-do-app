import React, { useState } from "react";
import "../App.css";
import { createTask } from "../api/todos";
// import styled from "@emotion/styled";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";

function AddTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError(false);
    const todo = {
      title,
      author,
      date,
      createdAt: Date.now(),
    };
    try {
      await createTask(todo);
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  console.log(title, author, date);

  return (
    <>
      <StyledHeader>
        <h2>ADD NEW TASK</h2>
      </StyledHeader>
      <main className="app__main">
        <form className="app__form" onSubmit={handleSubmit}>
          <label className="app__form__input">
            <span className="app__form__text">Title:</span>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label className="app__form__input">
            <span className="app__form__text">Author:</span>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleAuthorChange}
              placeholder="Who is going to do what?"
            />
          </label>
          <label className="app__form__input">
            <span className="app__form__text">Date:</span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
          <input
            className="main__button__add"
            type="submit"
            value="Add task"
            disabled={!title || !author || loading}
          />
          {error && <p>Something bad happened. Try again later!</p>}
        </form>
      </main>
      <StyledFooter />
    </>
  );
}

export default AddTask;
