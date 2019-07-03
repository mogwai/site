import React from "react";
import { Link } from "react-router-dom";

import profilePhoto from "./assets/profile400x400.jpg";
import medium from "./assets/sm-icons/medium64.png";
import github from "./assets/sm-icons/github64.png";
import twitter from "./assets/sm-icons/twitter100.png";
import linkedin from "./assets/sm-icons/linkedin64.png";

export default function Header() {
  return (
    <header className="App-header">
      <img className="profileImage" src={profilePhoto} />
      <div className="sm-icons-container">
        <a href="https://medium.com/@harrycblum">
          <img src={medium} />
        </a>
        <a href="https://github.com/mogwai">
          <img src={github} />
        </a>
        <a href="https://twitter.com/harrycblum">
          <img src={twitter} />
        </a>
        <a href="https://www.linkedin.com/in/harrycblum">
          <img src={linkedin} />
        </a>
      </div>
      <h1 className="App-title">Harry Coultas Blum</h1>
      {/* <div className="links">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/logs">Logs</Link>
      </div> */}
    </header>
  );
}
