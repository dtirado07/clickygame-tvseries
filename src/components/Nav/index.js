import React from "react";
import "./nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="animated tv show">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;