import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import textmd from "./articles/text.md";

export default class Logs extends Component {
  state = {
    data: null
  };

  render() {
    fetch(textmd)
      .then(response => response.text())
      .then(data => {
        this.setState({ data });
      });
    return <ReactMarkdown source={this.state.data} />;
  }
}
