import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentDisplay from "./components/ContentDisplay";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import { getData } from "./components/FakeData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faCoins,
  faClock,
  faTachometerAlt,
  faStar
} from "@fortawesome/free-solid-svg-icons";

library.add(faWrench, faClock, faTachometerAlt, faStar, faCoins);

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchById = this.fetchById.bind(this); //bind methods to ensure proper event handling function
    this.handleClick = this.handleClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.onCreateFeature = this.onCreateFeature.bind(this);
    this.onSaveData = this.onSaveData.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.renderData = this.renderData.bind(this);
    this.state = {
      items: [], //offers retrieved from fake data base.
      selectedItems: [],
      currentItem: {}, //the current item is initialized with
      itemParts: [],
      currentPart: {},
      selectionState: [],
      tabState: [1, 0, 0]
    };
  }

  renderData(data, id) {
    const updatedTabState = new Array(3).fill(0);
    updatedTabState[id] = 1;
    this.setState(
      {
        tabState: updatedTabState,
        selectedItems: this.state.items.filter(x => x.status === data)
      },
      console.log(this.state.selectedItems)
    );
  }
  updateValue(e, f) {
    const curr = this.state.currentPart;
    const updated = curr.features;

    const index = updated.indexOf(f);
    console.log("index:", index);
    updated[index][e.target.name] = e.target.value;
    curr.features = updated;
    this.setState({
      currentPart: curr
    });
  }
  //onCreateFeature() {}
  onDelete(id) {
    const curr = this.state.currentPart;
    const features = curr.features;
    const updated = features.filter(feature => feature.id !== id);
    curr.features = updated;
    this.setState(
      {
        currentPart: curr
      },
      console.log(updated)
    );
  }
  onCreateFeature() {
    const newFeature = {
      id: Date.now(),
      name: "",
      quantity: "",
      time: ""
    };
    const curr = this.state.currentPart;
    const updated = curr.features;

    updated.push(newFeature);
    curr.features = updated;
    this.setState({
      currentPart: curr
    });
  }
  onSaveData(parts) {}

  componentWillMount() {
    this.setState({
      items: getData()
    });
  }
  componentDidMount() {
    this.renderData("unread");
    this.setState({
      selectionState: new Array(this.state.items.length).fill(0)
    });
  }

  fetchById(id) {
    //this method finds and returns the object with matching id
    return this.state.items.find(item => item.id === id);
  }
  handleClick(id) {
    const { items, currentItem, selectionState } = this.state;
    const index = items.findIndex(x => x.id === id);
    selectionState.fill(0);
    selectionState[index] = 1;

    const curr = this.fetchById(id);
    curr.status = "opened";
    //when listItem clicked set the matching id item with currentItem in state

    this.setState({
      selectionState: selectionState,
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
        updateValue={this.updateValue}
        onCreateFeature={this.onCreateFeature}
        onSaveData={this.onSaveData}
      />
    );
  }

  render() {
    return (
      <div>
        <NavBar />
        {//this condition statement prevents App crashing when props sent to Content are of value null, or empty
        this.state.itemParts.length >= 1 && this.renderContent()}

        <SideBar
          selected={this.state.selectionState}
          handleClick={this.handleClick}
          items={this.state.selectedItems}
          renderData={this.renderData}
          tabState={this.state.tabState}
        />
      </div>
    );
  }
}
export default App;
