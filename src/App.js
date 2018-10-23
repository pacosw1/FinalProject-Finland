import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar";
import ContentDisplay from "./ContentDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <ContentDisplay />
        <SideBar />
      </div>
    );
  }
}

export default App;
