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
  faStar,
  faBars,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faWrench,
  faClock,
  faTachometerAlt,
  faStar,
  faCoins,
  faBars,
  faCaretDown
);

class App extends Component {
  constructor(props) {
    super(props);
    this.menu = this.menu.bind(this);
    this.fetchById = this.fetchById.bind(this); //bind methods to ensure proper event handling function
    this.handleClick = this.handleClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.sortList = this.sortList.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.onCreateFeature = this.onCreateFeature.bind(this);
    this.onSaveData = this.onSaveData.bind(this);
    this.onSortClick = this.onSortClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.renderData = this.renderData.bind(this);
    this.state = {
      items: [], //offers retrieved from fake data base.
      currIndex: null,
      currentItem: {}, //the current item is initialized with
      itemParts: [],
      currentPart: {},
      sort: "best",
      opened: true
    };
  }

  menu() {
    this.setState({
      opened: !this.state.opened
    });
  }

  sortList(field) {
    let { selectedItems } = this.state;
    let sorted = [...selectedItems];
    if (field === "Best") {
      sorted.sort(function(a, b) {
        return b.profit - a.profit;
      });
    } else if (field === "Worst") {
      sorted.sort(function(a, b) {
        return a.profit - b.profit;
      });
    }
    console.log("soreted");
    console.log(sorted);
    this.setState({
      items: sorted
    });
  }

  onSortClick(field) {
    this.sortList(field);
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
      name: "Hole",
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
    const { opened, items, currentItem, selectionState } = this.state;
    const index = items.findIndex(x => x.id === id);
    selectionState.fill(0);
    selectionState[index] = 1;

    const curr = this.fetchById(id);
    curr.status = "opened";
    //when listItem clicked set the matching id item with currentItem in state

    this.setState({
      selectionState: selectionState,
      currentItem: curr,
      currIndex: index,
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

  render() {
    return (
      <React.Fragment>
        <NavBar menu={this.menu} />

        <div className="flex ">
          <SideBar
            isOpen={this.state.opened}
            sortField={this.state.sort}
            checkId={this.state.currentItem.id}
            currIndex={this.state.currIndex}
            handleClick={this.handleClick}
            items={this.state.items}
            renderData={this.renderData}
            onSortClick={this.onSortClick}
          />
          <div className="contentContainer ">
            <ContentDisplay
              data={this.state.currentItem}
              parts={this.state.itemParts}
              currentPart={this.state.currentPart}
              customer={this.state.currentItem.name}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              onDelete={this.onDelete}
              updateValue={this.updateValue}
              onCreateFeature={this.onCreateFeature}
              onSaveData={this.onSaveData}
              opened={this.state.opened}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
