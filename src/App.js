import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar";
import ContentDisplay from "./ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentDisplay />
        <SideBar />
      </div>
    );
  }
}

export default App;
