import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar";
import ContentDisplay from "./ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Paco",
          parts: "10",
          complexity: "H",
          estimatedT: "10",
          testDetail: "Should display in content view"
        },
        {
          name: "Juan",
          parts: "20",
          complexity: "E",
          estimatedT: "1",
          testDetail: "Should display in content view"
        }
      ],
      currentItem: {
        name: "Paco",
        parts: "10",
        complexity: "H",
        estimatedT: "10",
        testDetail: "Should display in content view"
      }
    };
  }
  render() {
    const items = this.state.items;
    const curr = this.state.currentItem;
    return (
      <div>
        <NavBar />
        <ContentDisplay current={curr} />
        <SideBar items={items} />
      </div>
    );
  }
}

export default App;
