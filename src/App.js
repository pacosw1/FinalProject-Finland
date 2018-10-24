import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentDisplay from "./components/ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchById = this.fetchById.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.state = {
      items: itemList,
      currentItem: itemList[0],
      itemParts: [],
      currentPart: {}
    };
  }

  fetchById(id) {
    //this method finds and returns the object with matching id
    return this.state.items.find(item => item.id === id);
  }
  handleClick(id) {
    const curr = this.fetchById(id);
    //when listItem clicked set the matching id item with currentItem in state
    this.setState({
      currentItem: curr,
      itemParts: curr.parts,
      currentPart: curr.parts[0]
    });
    //console.log(this.fetchById(id));
  }

  handleNext(index) {
    // alert("working")
    this.setState({
      currentPart: this.state.itemParts[index + 1]
    });
  }

  handlePrev(index) {
    this.setState(
      {
        currentPart: this.state.itemParts[index - 1]
      },
      () => console.log(this.state.currentPart)
    );
  }

  renderContent() {
    return (
      <ContentDisplay
        parts={this.state.itemParts}
        currentPart={this.state.currentPart}
        customer={this.state.currentItem.name}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
      />
    );
  }

  render() {
    console.log(this.state.itemParts.length);
    return (
      <div>
        <NavBar />
        {this.state.itemParts.length >= 1 && this.renderContent()}

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
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        id: "234234",
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
      },
      {
        id: "9342f",
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
  },
  {
    id: "h12jbbj2L",
    name: "Matthew",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        id: "213246",
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
        id: "ff412",
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
      },
      {
        id: "9342f",
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
  },
  {
    id: "h12jbb3",
    name: "Robert",
    complexity: "E",
    estimatedT: "1",
    testDetail: "Should display in content view",
    parts: [
      {
        id: "9342f",
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
      },
      {
        id: "ewe",
        material: "Xd",
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
