import React, { Component } from "react";
import Table from "./Table";

class ContentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [this.props.current.parts],
      currentPart: this.props.current.parts[0]
    };
  }

  componentWillReceiveProps() {
    const curr = this.props.current;
    this.setState({
      parts: curr.parts,
      currentPart: curr.parts[0]
    });
  }

  render() {
    //render the current part
    const curr = this.props.current;
    const currentPart = this.state.currentPart;
    const dims = currentPart.dimensions;

    return (
      <div className="split right">
        <div className="header" style={{ display: "flex" }}>
          <h1>{curr.name}</h1>
          <a href="index.js">See Customer History</a>
        </div>
        {currentPart.material}
        {currentPart.picture}
        {dims.length}
        {dims.width}
        {dims.thickness}
        <Table features={currentPart.features} />
        <div />
      </div>
    );
  }
}

export default ContentDisplay;
/*
<div style={{ display: "flex" }}>
          <img src="http://picsum.photos/200" />
        </div>*/
