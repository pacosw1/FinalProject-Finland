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
      currentItem: itemList[0]
    };
  }

  fetchById(id) {
    const obj = {
      length: 10,
      width: 20,
      thickness: 0.2
    };
    //this method finds and returns the object with matching id
    return this.state.items.find(item => item.id === id);
  }
  handleClick(id) {
    //when listItem clicked set the matching id item with currentItem in state
    this.setState({ currentItem: this.fetchById(id) });
    //console.log(this.fetchById(id));
  }
  renderContent() {
    return <ContentDisplay current={this.state.currentItem} />;
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.renderContent()}
        <SideBar handleClick={this.handleClick} items={this.state.items} />
      </div>
    );
  }
}
const itemList = [
  //hard-coded test data
  {
    id: "h11jbbj21",
    name: "Luke",
    parts: "20",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        material: "aluminum",
        picture: "url/",
        dimensions: {
          length: 10,
          width: 20,
          thickness: 30
        },
        features: [
          {
            name: "hole",
            quantity: 10,
            time: 20
          }
        ]
      }
    ]
  },
  {
    id: "h12jbbj2L",
    name: "Matthew",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        material: "aluminum",
        picture: "url/",
        dimensions: {
          length: 10,
          width: 20,
          thickness: 30
        },
        features: [
          {
            name: "hole",
            quantity: 10,
            time: 20
          }
        ]
      }
    ]
  },
  {
    id: "Mm12323",
    name: "John",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        material: "notALuminum",
        picture: "url/",
        dimensions: {
          length: 10,
          width: 2,
          thickness: 30
        },
        features: [
          {
            name: "xd",
            quantity: 10,
            time: 20
          }
        ]
      }
    ]
  },
  {
    id: "h12jbb3",
    name: "Robert",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        material: "Null",
        picture: "url/",
        dimensions: {
          length: 10,
          width: 20,
          thickness: 30
        },
        features: [
          {
            name: "Hey",
            quantity: 10,
            time: 20
          }
        ]
      }
    ]
  }
];

export default App;
