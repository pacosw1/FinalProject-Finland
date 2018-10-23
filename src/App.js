import React, { Component } from "react";
import "./App.css";
import SideBar from "./SideBar";
import ContentDisplay from "./ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchById = this.fetchById.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items: itemList,
      currentItem: {
        id: "h12jbbj21",
        name: "Paco",
        parts: "10",
        complexity: "H",
        estimatedT: "10",
        testDetail: "Should display in content view"
      }
    };
  }

  fetchById(id) {
    //this method finds and returns the object with matching id
    return this.state.items.find(item => item.id === id);
  }
  handleClick(id) {
    //when listItem clicked set the matching id item with currentItem in state
    this.setState({ currentItem: this.fetchById(id) });
    //console.log(this.fetchById(id));
  }

  render() {
    const items = this.state.items;
    const curr = this.state.currentItem;
    return (
      <div>
        <NavBar />
        <ContentDisplay current={curr} />
        <SideBar handleClick={this.handleClick} items={items} />
      </div>
    );
  }
}
const itemList = [
  //hard-coded test data
  {
    id: "h12jbbj21",
    name: "Paco",
    parts: "10",
    complexity: "H",
    estimatedT: "10",
    testDetail: "Should display in content view"
  },
  {
    id: "h11jbbj21",
    name: "Luke",
    parts: "20",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view"
  },
  {
    id: "h12jbbj2L",
    name: "Matthew",
    parts: "20",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view"
  },
  {
    id: "Mm12323",
    name: "John",
    parts: "20",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view"
  },
  {
    id: "h12jbb3",
    name: "Robert",
    parts: "20",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view"
  }
];

export default App;
