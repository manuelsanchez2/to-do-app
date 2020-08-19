import React from "react";
import plusSrc from "../assets/plus.svg";
import "./ButtonPlus.css";

function ButtonPlus() {
  return (
    <button className="button">
      <img
        className="button__image"
        src={plusSrc}
        alt="button that creates tasks"
      />
    </button>
  );
}

export default ButtonPlus;
