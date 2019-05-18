import React from "react";
import "./App.css";
// Images
import profilePhoto from "./assets/profile400x400.jpg";
import medium from "./assets/sm-icons/medium64.png";
import github from "./assets/sm-icons/github64.png";
import twitter from "./assets/sm-icons/twitter100.png";
import linkedin from "./assets/sm-icons/linkedin64.png";
import draw from "./dots";

class App extends React.Component {
  componentDidMount() {
    draw();
  }
  render() {
    return (
      <div>
        <canvas id="canvas" />
        <div className="App">
          <header className="App-header">
            <img className="profileImage" src={profilePhoto} />
            <h1 className="App-title">Harry Coultas Blum</h1>
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
          </header>
        </div>
      </div>
    );
  }
}

export default App;
