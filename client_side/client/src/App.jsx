import React, { Component } from "react";

import Features from "./components/Features.jsx";
import Nav from "./components/Nav.jsx";

import "./stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Nav/>
        <div className="feature-container">
          <Features/>
        </div>
      </div >
    );
  }
}

export default App;
