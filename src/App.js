import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentDisplay from "./components/ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import { getData } from "./components/FakeData";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchById = this.fetchById.bind(this); //bind methods to ensure proper event handling function
    this.handleClick = this.handleClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.state = {
      items: [], //offers retrieved from fake data base.
      currentItem: {}, //the current item is initialized with
      itemParts: [],
      currentPart: {}
    };
  }

  onCreateFeature() {}

  onDelete(toBeDeleted) {
    //toBeDeleted = feature name
    const currPart = this.state.currentPart;
    const features = this.state.currentPart.features; //copy feature array to be deleted
    const updatedFeatures = features.filter(
      feature => feature.name !== toBeDeleted
    );
    currPart.features = [...updatedFeatures];

    this.setState({
      currentPart: currPart
    });
    console.log(toBeDeleted);
  }
  componentWillMount() {
    this.setState({
      items: getData()
    });
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
    //child component Content fires event handler and is handled by Parent App Component.
    this.setState({
      currentPart: this.state.itemParts[index + 1]
    });
  }

  handlePrev(index) {
    //^^
    this.setState({
      currentPart: this.state.itemParts[index - 1] //back button so the currentPart is su
    });
  }

  renderContent() {
    //this function renders the Content component and passes all neccesary props to display item data
    return (
      <ContentDisplay
        parts={this.state.itemParts}
        currentPart={this.state.currentPart}
        customer={this.state.currentItem.name}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
        onDelete={this.onDelete}
      />
    );
  }

  render() {
    return (
      <div>
        <NavBar />
        {//this condition statement prevents App crashing when props sent to Content are of value null, or empty
        this.state.itemParts.length >= 1 && this.renderContent()}

        <SideBar handleClick={this.handleClick} items={this.state.items} />
      </div>
    );
  }
}
export default App;
