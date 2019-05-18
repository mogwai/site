import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import draw from "./dots";
import Header from "./Header";
import Logs from "./Logs";
import About from "./About";

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
          {/* <Route path="/about" component={Projects} /> */}
          <Route path="/logs" component={Logs} />
          <Route
            exact
            strict
            path="/:somepath"
            render={({ match }) => <p>There is no {match.url} soz</p>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
