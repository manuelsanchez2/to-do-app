import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function AddTask() {
  return (
    <div>
      <header className="app__header">
        <h2>ADD NEW TASK</h2>
      </header>
      <main className="app__main">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/home">BACK TO HOME</Link>
      </main>
    </div>
  );
}

export default AddTask;
