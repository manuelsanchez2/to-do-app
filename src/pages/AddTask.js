import React from "react";
import "../App.css";

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
      </main>
    </div>
  );
}

export default AddTask;
