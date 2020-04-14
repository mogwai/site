import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import draw from "./dots";
import Header from "./Header";
import Logs from "./Logs";
import About from "./About";

const CV_URL =
  "https://docs.google.com/document/d/1-5dOXJVj-76sywsWTxtBaWhnCBNOGsGiiUu0jFondoA/edit?usp=sharing";

const BOX_INSTALL_SCRIPT =
  "https://gist.githubusercontent.com/mogwai/1821b3950c2d4e760c5db72ca160b408/raw/93491f82b3ea032e759a3abb3967a54602e037a6/gistfile1.txt";
function relocate(location) {
  return () => (window.location.href = location);
}

class App extends React.Component {
  componentDidMount() {
    draw();
  }

  render() {
    return (
      <Router>
        <canvas id="canvas" />
        <div className="App">
          <Header />
          <Route exact path="/" component={About} />
          <Route path="/cv" component={relocate(CV_URL)} />
          <Route path="/setup" component={relocate(BOX_INSTALL_SCRIPT)} />
          <Route path="/logs" component={Logs} />
        </div>
      </Router>
    );
  }
}

export default App;
